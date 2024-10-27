import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const { user, isAuth } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/appointments/get-all-appointment",
          { withCredentials: true }
        );
        console.log("Fetched Appointments:", data.appointments);
        setAppointments(data.appointments);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAppointments();
  }, []);

  const handleStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/appointments/update-status-appointment/${appointmentId}`,
        { status },
        { withCredentials: true }
      );

      setAppointments((preAppointments) =>
        preAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );

      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/appointments/delete-appointment/${appointmentId}`,
        { withCredentials: true }
      );

      setAppointments((app) =>
        app.filter((appointment) => appointment._id !== appointmentId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // if (!isAuth || user.role !== "Admin") return <Navigate to="/admindashboard" />

  return (
    <div className="flex flex-col gap-5 mx-4 md:mx-20 bg-gray-100 p-4 md:p-10 h-screen rounded-lg mt-20">
      <div className="flex flex-col md:flex-row gap-5 h-auto ">
        <div className="flex flex-1 items-center bg-blue-200 rounded-lg p-5">
          <div className="flex-2 ml-4 md:ml-0">
            <div className="flex items-center font-bold cursor-pointer text-2xl md:text-3xl mb-3">
              <p className="mr-2">Hello,</p>
              <p className="text-pink-500">Admin</p>
            </div>
            <p className="text-sm md:text-base">
              Welcome to the admin Dashboard. Here you can manage all the
              appointments and doctors.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-blue-500 text-white flex flex-col justify-center items-center rounded-lg p-5">
          <p className="text-xl md:text-2xl font-semibold">
            Total Appointments
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">100</h1>
        </div>
        <div className="flex-1 bg-blue-200 text-pink-500 flex flex-col justify-center items-center rounded-lg p-5">
          <p className="text-xl md:text-2xl font-semibold">
            Registered Doctors
          </p>
          <p className="text-2xl md:text-3xl font-bold tracking-wider">50</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 md:p-10 h-auto md:h-[65vh] overflow-y-auto">
        <h4 className="text-xl md:text-2xl text-center cursor-pointer font-semibold mb-5 text-gray-800">
          Appointments
        </h4>
        <div className="overflow-x-auto">
  <table className="min-w-full mx-auto bg-white shadow-md rounded-lg hidden md:table">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="py-2 md:py-3 text-xs md:text-sm">Patient</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Date</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Doctor</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Department</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Status</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Visited</th>
        <th className="py-2 md:py-3 text-xs md:text-sm">Actions</th>
      </tr>
    </thead>
    <tbody>
      {appointments && appointments.length > 0 ? (
        appointments.map((items) => (
          <tr key={items._id} className="hover:bg-gray-300">
            <td className="py-2 text-center md:py-3 text-xs md:text-sm cursor-pointer">{`${items.firstName} ${items.lastName}`}</td>
            <td className="py-2 text-center md:py-3 text-xs md:text-sm cursor-pointer">
              {items.appointment_date.substring(0, 10)}
            </td>
            <td className="py-2 text-center md:py-3 text-xs md:text-sm cursor-pointer">{`${items.doctor.firstName} ${items.doctor.lastName}`}</td>
            <td className="py-2 text-center md:py-3 text-xs md:text-sm cursor-pointer">
              {items.department}
            </td>
            <td className="py-2 text-center md:py-3 text-xs md:text-sm cursor-pointer">
              <select
                value={items.status}
                onChange={(e) =>
                  handleStatus(items._id, e.target.value)
                }
                className={`w-full text-md lg:text-lg font-semibold border-none ${
                  items.status === "Pending"
                    ? "text-yellow-500"
                    : items.status === "Accepted"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <option value="Pending" className="text-yellow-500 cursor-pointer">Pending</option>
                <option value="Accepted" className="text-green-500 cursor-pointer">Accepted</option>
                <option value="Rejected" className="text-red-500 cursor-pointer">Rejected</option>
              </select>
            </td>
            <td className="py-2 text-center md:py-3 cursor-pointer">
              {items.hasVisited ? (
                <GoCheckCircleFill className="text-green-500 text-xl md:text-2xl mx-auto" />
              ) : (
                <AiFillCloseCircle className="text-red-500 md:text-2xl lg:text-3xl mx-auto" />
              )}
            </td>
            <td className="py-2 flex items-center justify-center text-center md:py-3 cursor-pointer">
              <MdDelete
                size={20}
                className="flex justify-center items-center text-red-600"
                onClick={() => handleDelete(items._id)}
              />
            </td>
          </tr>
        ))
      ) : (
        <tr className="text-center">
          <td colSpan="7" className="py-3 text-sm">
            No Registered Patients Found
          </td>
        </tr>
      )}
    </tbody>
  </table>

  {/* Mobile View */}
  <div className="md:hidden">
    {appointments && appointments.length > 0 ? (
      appointments.map((items) => (
        <div key={items._id} className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100">
          <h3 className="font-semibold text-lg">{`${items.firstName} ${items.lastName}`}</h3>
          <p><strong>Date:</strong> {items.appointment_date.substring(0, 10)}</p>
          <p><strong>Doctor:</strong> {`${items.doctor.firstName} ${items.doctor.lastName}`}</p>
          <p><strong>Department:</strong> {items.department}</p>
          <div className="flex items-center">
            <p className="mr-4"><strong>Status:</strong></p>
            <select
              value={items.status}
              onChange={(e) =>
                handleStatus(items._id, e.target.value)
              }
              className={`border-none ${items.status === "Pending" ? "text-yellow-500" : items.status === "Accepted" ? "text-green-500" : "text-red-500"}`}
            >
              <option value="Pending" className="text-yellow-500">Pending</option>
              <option value="Accepted" className="text-green-500">Accepted</option>
              <option value="Rejected" className="text-red-500">Rejected</option>
            </select>
          </div>
          <p className="flex items-center">
            <strong>Visited:</strong>
            {items.hasVisited ? (
              <GoCheckCircleFill className="text-green-500 text-xl ml-2" />
            ) : (
              <AiFillCloseCircle className="text-red-500 text-xl ml-2" />
            )}
          </p>
          <button onClick={() => handleDelete(items._id)} className="text-red-600 hover:underline">
            Delete
          </button>
        </div>
      ))
    ) : (
      <div className="text-center">
        <p>No Registered Patients Found</p>
      </div>
    )}
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
