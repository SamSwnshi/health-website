import User from "../models/user.models.js";
import { jsonwebtoken } from "../utlis/token.js";
import cloudinary from "cloudinary";
//NOTE - creating patient
export const createUserController = async (req, res) => {
  const { firstName, lastName, email, nic, dob, password, gender, phone } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !nic ||
    !dob ||
    !password ||
    !gender ||
    !phone
  ) {
    return res
      .status(400)
      .send({ message: "Please Fill all the required details" });
  }

  const isRegister = await User.findOne({ email });
  if (isRegister) {
    return res.status(400).send({
      message: "Patient is already registered. Please login!",
    });
  }

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    nic,
    dob,
    password,
    gender,
    phone,
    roles: "Patient",
  });

  // res.status(201).json({message: "User Created Successfully",user: newUser,})

  jsonwebtoken(newUser, "User created successfully", 201, res);
};

//NOTE - login controllers
export const loginController = async (req, res) => {
  const { email, password, roles } = req.body;

  if (!email || !password || !roles) {
    return res
      .status(400)
      .send({ message: "Please Fill all the required details" });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }
  const passwordMatch = await user.comparePassword(password);

  if (!passwordMatch) {
    return res.status(400).send({ message: "Invalid Password" });
  }

  if (roles !== user.roles) {
    return res.status(400).send({ message: "Invalid Role" });
  }

  // res.status(200).send({message: "User Login Successfully!",user})
  jsonwebtoken(user, "User Login Successfully", 200, res);
};

//NOTE - Admin controllers
export const createAdminController = async (req, res) => {
  const { firstName, lastName, dob, email, phone, password, nic, gender } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !nic ||
    !dob ||
    !password ||
    !gender ||
    !phone
  ) {
    return res
      .status(400)
      .send({ message: "Please Fill all the required details" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    nic,
    dob,
    password,
    gender,
    phone,
    roles: "Admin",
  });

  res.status(201).json({
    success: true,
    message: "Admin created successfully",
    admin,
  });
};

//NOTE - create new Doctor

export const createNewDoctorController = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(404).json({ message: "Doctor Images Required!" });
  }

  const { docImage } = req.files;

  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

  if (!allowedFormats.includes(docImage.mimetype)) {
    return res.status(400).json({ message: "Files Format Not Supported!" });
  }

  const {
    firstName,
    lastName,
    dob,
    email,
    phone,
    gender,
    nic,
    password,
    doctorDepartment,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !email ||
    !gender ||
    !phone ||
    !nic ||
    !password ||
    !doctorDepartment
  ) {
    return res.status(400).json({ message: "Please Fill Full Form!" });
  }

  const register = await User.findOne({ email });

  if (register) {
    return res
      .status(400)
      .json({ message: `This Email already register as a ${User.roles}` });
  }

  //cloudinary setup
  const cloudinaryResponse = await cloudinary.uploader.upload(
    docImage.tempFilePath
  );

  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.log(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    return res
      .status(404)
      .json({ message: "Failed to Upload Image to Cloudinary!" });
  }

  const doctor = await User.create({
    firstName,
    lastName,
    dob,
    email,
    phone,
    gender,
    nic,
    password,
    doctorDepartment,
    roles: "Doctor",
    docImage: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "New Doctor Register",
    doctor: doctor,
  });
};

//NOTE - getting all the doctor
export const getAllDoctorController = async (req, res) => {
  const doctor = await User.find({ roles: "Doctor" });
  if (doctor.length === 0) {
    return res.status(404).json({
      message: "Doctor Not Found!",
    });
  }
  res.status(200).json({
    success: true,
    message: "Doctor Fetched Successfully!",
    doctor,
  });
};

//NOTE - getting all patientData
export const getAllPatientController = async (req, res) => {
  const patient = await User.find({ roles: "Patient" });
  if (patient.length === 0) {
    return res.status(404).json({
      message: "patient Not Found!",
    });
  }
  res.status(200).json({
    success: true,
    message: "Patient Fetched Successfully!",
    patient,
  });
};

//NOTE - getting single patient data
export const getSinglePatientControllers = async (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Getting Single Patient Successfully",
    user: req.user,
  });
};

//NOTE - logout admin
export const logOutAdmin = async (req, res) => {
  console.log("Logout request received from admin:", req.user);
  res
    .status(200)
    .cookie("adminToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Admin Logged Out Successfully",
    });
};
//NOTE - logout doctor
export const logOutDoctor = async (req, res) => {
  console.log("Logout request received from admin:", req.user);
  res
    .status(200)
    .cookie("doctorToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Admin Logged Out Successfully",
    });
};
//NOTE - logout patient
export const logOutPatient = async (req, res) => {
  console.log("Logout request received from admin:", req.user);
  res
    .status(200)
    .cookie("patientToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Admin Logged Out Successfully",
    });
};

//NOTE - delete single doctor
export const deleteDoctorController = async(req,res)=>{
  const {id} = req.params;

  const doctor = await User.findByIdAndDelete({_id: id,roles: "Doctor"});

  if(!doctor && doctor.length === 0 ){
res.status(404).json({
  message: "Doctor Not Found"
})
  }
  res.status(200).json({
    success: true,
    message: "Doctor Deleted Successfully",
  })
}

//NOTE - delete single patient
export const deletePatientController = async(req,res)=>{
  const {id} = req.params;

  const patient = await User.findByIdAndDelete({_id: id,roles: "Patient"});

  if(!patient && patient.length === 0 ){
res.status(404).json({
  message: "Patient Not Found"
})
  }
  res.status(200).json({
    success: true,
    message: "patient Deleted Successfully",
  })
}


export default {
  createUserController,
  loginController,
  createAdminController,
  createNewDoctorController,
  getAllDoctorController,
  getAllPatientController,
  getSinglePatientControllers,
  logOutAdmin,
  logOutPatient,
  logOutDoctor,
  deleteDoctorController,
  deletePatientController,
};
