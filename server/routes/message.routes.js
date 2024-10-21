import express from "express";
import { adminTokenAuth } from "../middleware/auth.js";
import {
  createMessage,
  getAllMessage,
  deleteMessage,
} from "../controllers/message.controllers.js";
const router = express.Router();

//NOTE - create message
router.post("/create-message", createMessage);

//NOTE - get all the message
router.get("/get-all-message", adminTokenAuth, getAllMessage);

//NOTE - Delete single message only by admin
router.delete("/message-delete/:id", adminTokenAuth, deleteMessage);
export default router;
