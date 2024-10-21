import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userModels =new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name is Required"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last Name is Required"],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Please Provide a Valid Email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [10, "Phone Number is Required "],
      maxLength: [10, "Phone Number is Required"],
    },
    nic: {
      type: String,
      required: true,
      minLength: [10, "NIC Must Contain Only 10 Digit is Required"],
    },
    dob: {
      type: String,
      required: [true, "Date of Birth is required!"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minLength: [6, "Password must Contain only 6 Digit "],
      select: false,
    },
    roles: {
      type: String,
      required: [true, "User Role is required"],
      enum: ["Patient", "Doctor", "Admin"],
    }, //   this is only for doctor
    doctorDepartment: {
      type: String,
    },
    //   this is only for doctor not user and amin
    docImage: {
      public_id: String,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

userModels.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  })

userModels.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

userModels.methods.generateJsonWebToken = function (){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    })
}

const User = mongoose.model("User", userModels);

export default User;
