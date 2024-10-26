import React from "react";
import Sidebar from "../pages/Sidebar";
import Dashboard from "./Dashboard";
import DoctorList from "./DoctorList";
import AddNewAdmin from "./NewAdminList";
import AddNewDoctor from "./NewDoctorList";
import AllMessages from "./AllMessages";
import AllPatient from "./AllPatient";
import { Routes, Route } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="mt-20">
      <Sidebar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="all-doctors" element={<DoctorList />} />
          <Route path="add-new/admin" element={<AddNewAdmin />} />
          <Route path="add-new/doctor" element={<AddNewDoctor />} />
          <Route path="all-messages" element={<AllMessages />} />
          <Route path="all-patients" element={<AllPatient />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
