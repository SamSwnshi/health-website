import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsName = [
    "Pediatrics",
    "ENT",
    "Orthopedic",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "Cardiology"
  ];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/user/get-all-doctor",
        {
          withCredentials: true,
        }
      );
      setDoctors(data?.doctor);
    };
    fetchDoctor();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/appointments/create-appointment",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-20 p-4">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-full border-2 border-red-900 p-6 shadow-xl text-center rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Appointment</h1>
        <form onSubmit={handleAppointment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              {departmentsName.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor, index) => (
                <option key={index} value={`${doctor.firstName} ${doctor.lastName}`}>
                  {doctor.firstName} {doctor.lastName}
                </option>
              ))}
            </select>
          </div>
          <textarea
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-4"
            placeholder="Enter your address"
          />
          <div className="flex items-center text-center justify-center gap-4 mb-4">
            <p className="mb-0">Have you Visited Before?</p>
            <input
              type="checkbox"
              className="w-6 h-6 rounded-full border-2"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
            />
          </div>
          <button
            type="submit"
            className="mx-auto bg-blue-400 text-black w-full cursor-pointer hover:text-white py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
