import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const patientAuthToken = async(req,res,next)=>{
    const token = req.cookies.patientToken;

    if(!token){
        return res.status(400).json({message: "User is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    // if(req.user.roles !== "Patient"){
    //     return res.status(403).json({message: "Patient is Not authorized"});
    // }
    next();
}
export const doctorAuthToken = async(req,res,next)=>{
    const token = req.cookies.doctorToken;

    if(!token){
        return res.status(400).json({message: "Doctor is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    // if(req.user.roles !== "Doctor"){
    //     return res.status(403).json({message: "Doctor is Not authorized"});
    // }
    next();
}
export const adminTokenAuth = async(req,res,next)=>{
    const token = req.cookies.adminToken;
    // console.log("Admin token received:", token); 

    if(!token){
        console.log("No token found, admin is not authenticated.");
        return res.status(400).json({message: "Admin is not authenticated!"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);

    // if(req.user.roles !== "Admin"){
    //     return res.status(403).json({message: "Admin is Not authorized"});
    // }
    next();
}
