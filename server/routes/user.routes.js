import express from "express";
import {
  createUserController,
  loginController,
  createAdminController,
  createNewDoctorController,
  getAllDoctorController,
  getAllPatientController,
  getSinglePatientControllers,
  deleteDoctorController,
  deletePatientController,
  logOut,
  currentLogin,
} from "../controllers/user.controllers.js";
import {
  adminTokenAuth,
  patientAuthToken,
  doctorAuthToken,
} from "../middleware/auth.js";
const router = express.Router();

//NOTE - me data
router.get("/me", adminTokenAuth, currentLogin);

//NOTE - create a User
router.post("/create-patient", createUserController);

//NOTE - login User
router.post("/login", loginController);

//NOTE - add new admin
//NOTE - only admin can create a admin
router.post("/create-new-admin", adminTokenAuth, createAdminController);

//NOTE - add new doctor
//NOTE - Only admin can create a doctor
router.post("/create-new-doctor", adminTokenAuth, createNewDoctorController);

//NOTE - getting all the doctor
router.get("/get-all-doctor", getAllDoctorController);

//NOTE - Get all the patient
router.get("/get-all-patient", adminTokenAuth, getAllPatientController);

//NOTE - get single patient
router.get("/single-patient", patientAuthToken, getSinglePatientControllers);

//NOTE - get single doctor
router.get("/single-doctor", doctorAuthToken, getSinglePatientControllers);

//NOTE - get single admin
router.get("/single-admin", adminTokenAuth, getSinglePatientControllers);

//NOTE - logout doctor
router.post("/logout", logOut);


// //NOTE - logout patient
// router.post("/logout",  logOut);

// //NOTE - logout admin
// router.post("/logout",  logOut);

//NOTE - delete single doctor
router.delete("/delete/doctor/:id", adminTokenAuth, deleteDoctorController);

//NOTE - delete single patient
router.delete("/delete/patient/:id", adminTokenAuth, deletePatientController);

export default router;
