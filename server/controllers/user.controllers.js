import User from "../models/user.models.js";

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
    roles: "Patient"
  });



  res.status(201).json({message: "User Created Successfully",user: newUser,})
};

//NOTE - login controllers
export const loginController = async(req,res) =>{
    const {email,password,role} = req.body;

    if(!email || !password || !role){
      return res.status(400).send({message: "Please Fill all the required details" });
    }

    const user = User.findOne({email}).select("+password");

    if(!user){
      return res.status(400).send({message: "Invalid Email or Password" });
    }
    const passwordMatch = await user.comparePassword(password)

    if(!passwordMatch){
      return res.status(400).send({message: "Invalid Email or Password" });
    }

    if(role !== user.role){
      return res.status(400).send({message: "Invalid Role" });
    }
    jsontoken(user,"User Login Successfully",200,res);
}

export default {createUserController}
