import Appointment from "../models/appointment.models.js";
import User from "../models/user.models.js";

//NOTE - creating appointment
export const creatingAppointment = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }

  const foundDoctors = await User.find({
    firstName: { $regex: new RegExp(doctor_firstName, "i") },
    lastName: { $regex: new RegExp(doctor_lastName, "i") },
    roles: "Doctor",
    doctorDepartment: { $regex: new RegExp(department, "i") },
  });
  if (foundDoctors.length === 0) {
    return res.status(400).json({ message: "Doctor Not Found" });
  }
  if (foundDoctors.length > 1) {
    return res.status(400).json({ message: "Multiple Doctors Found" });
  }

  const doctorId = foundDoctors[0].id;

  const patientId = req.user._id;

  const appiontment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: { firstName: doctor_firstName, lastName: doctor_lastName },
    hasVisited,
    address,
    doctorId,
    patientId,
  });

  // response here
  return res.status(201).send({
    success: true,
    message: "Appointment Send Successfully",
    appiontment: appiontment,
  });
};

//NOTE - getting appointment
export const gettingAllAppointment = async (req, res) => {
  const appointments = await Appointment.find();
  if (appointments.length === 0) {
    return res.status(400).json({
      message: "Appointment Not Found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Getting All the Appointment",
    appointments
  });
};

//NOTE - deleting appointment
export const deletingAppointment = async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.findById(id);
  if (!appointments) {
    return res.status(400).json({
      message: "Appointment Not Found",
    });
  }
  const deletingAppoin = appointments.deleteOne();
  return res.status(200).json({
    status: true,
    message: "Appointment Deleted Successfully",
    deletingAppoin,
  });
};
//NOTE - updating appointment
export const updatingAppointment = async (req, res) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(400).json({ message: "Appointment not found" });
  }
  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({
    success: true,
    message: "Appointment Status Updated",
  });
};

export default {
  creatingAppointment,
  gettingAllAppointment,
  deletingAppointment,
  updatingAppointment,
};
