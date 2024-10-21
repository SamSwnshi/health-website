import Message from "../models/message.models.js";

//NOTE - creating message
export const createMessage = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    res.status(400).json({ message: "Please fill full Form!" });
  }

  const userMessage = await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
    userMessage,
  })
};
export const getAllMessage = async (req, res) => {
    const message = await Message.find();
    if(!message || message.length === 0){
        res.status(404).json({message: "No message found!"})
    }
    res.status(200).json({
        success: true,
        message: "Message found successfully",
        message
    })
};
export const deleteMessage = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({message: "Message Id is Not Found"})
    }
    const deleteMessage = await Message.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: "Message Deleted Successfully",
        deleteMessage,
    })
};

export default {
  createMessage,
  getAllMessage,
  deleteMessage,
};
