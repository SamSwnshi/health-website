import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/user/logout-patient",
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuth(false);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Logout failed. Please try again."
      );
    }
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="shadow-lg fixed top-0 left-0 right-0 z-20 ">
      <div className="max-x-[1540px] flex justify-between  bg-red-600 mx-auto py-4 px-8 ">
        <nav className="w-full flex justify-between  items-center">
          <div className="flex-1 text-xl font-bold">
            <Link to="/">Hospital Management System</Link>
          </div>
          <div className="hidden lg:flex flex-2">
            <div className="flex gap-6 ">
              <Link
                to="/"
                className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8 "
              >
                Home
              </Link>
              <Link
                to="/about"
                className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8 "
              >
                About
              </Link>
              <Link
                to="/appointment"
                className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8 "
              >
                Appointment
              </Link>
              {isAuth ? (
                <button className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8" onClick={handleLogin}>
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
