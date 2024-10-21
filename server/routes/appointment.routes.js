import express from "express";

import {
  creatingAppointment,
  gettingAllAppointment,
  deletingAppointment,
  updatingAppointment,
} from "../controllers/appointment.controllers.js";

import { adminTokenAuth, patientAuthToken } from "../middleware/auth.js";
const router = express.Router();

//NOTE - creating new appointment
router.post("/create-appointment", patientAuthToken, creatingAppointment);

//NOTE - getting all appointment
router.get("/get-all-appointment", adminTokenAuth, gettingAllAppointment);

//NOTE - deleting appointment by id
router.delete("/delete-appointment/:id", adminTokenAuth, deletingAppointment);

//NOTE - updating appointment by id
router.put(
  "/update-status-appointment/:id",
  adminTokenAuth,
  updatingAppointment
);

export default router;
