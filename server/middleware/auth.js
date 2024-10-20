import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const patientToken = async(req,res)=>{
    const token = req.cookie.patientToken;

    if(!token){
        return res.status(400).json({message: "User is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    if(req.user.roles !== "Patient"){
        return res.status(403).json({message: "Admin is Not authorized"});
    }
}
export const doctorToken = async(req,res)=>{
    const token = req.cookie.doctorToken;

    if(!token){
        return res.status(400).json({message: "Doctor is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    if(req.user.roles !== "Doctor"){
        return res.status(403).json({message: "Doctor is Not authorized"});
    }
}
export const adminToken = async(req,res)=>{
    const token = req.cookie.adminToken;

    if(!token){
        return res.status(400).json({message: "Admin is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    if(req.user.roles !== "Admin"){
        return res.status(403).json({message: "Admin is Not authorized"});
    }
}
