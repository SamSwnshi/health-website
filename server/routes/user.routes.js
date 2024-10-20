import express from "express";
import { createUserController ,loginController,createAdminController} from "../controllers/user.controllers.js";
const router = express.Router();

//NOTE - create a User
router.post("/create-patient", createUserController);

//NOTE - login User
router.post("/login",loginController);

//NOTE - add new admin
router.post("/create-new-admin",createAdminController)

//NOTE - add new doctor

export default router;
