import User from "../models/user.models.js";
import { jsonwebtoken } from "../utlis/token.js";
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
  
};

export default {
  createUserController,
  loginController,
  createAdminController,
  createNewDoctorController,
};
