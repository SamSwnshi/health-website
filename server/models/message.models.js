import mongoose from "mongoose";
import validator from "validator";
const messageModels =new mongoose.Schema({

    firstName : {
        type: String,
        required: true,
        minLength: [3,"First Name should contain 3 letters Characters!"]
    },
    lastName : {
        type: String,
        required: true,
        minLength: [3,"Last Name should contain 3 letters Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate : [validator.isEmail,"Provide a Valid Email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10,"Phone Number should contain 10 digits"],
        maxLength: [10,"Phone Number should contain 10 digits"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10,"Message Must Contain At least 50 Characters!"]
    }
},{timestamp: true});

const Message = mongoose.model("Message",messageModels);

export default Message;