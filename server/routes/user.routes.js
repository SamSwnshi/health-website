import express from "express";
import { createUserController } from "../controllers/user.controllers.js";
const router = express.Router();

//NOTE - create a User
router.post("/create-patient", createUserController);

export default router;
