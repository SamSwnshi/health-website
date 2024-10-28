import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuth, setIsAuth, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuth(false);
      setUser({});
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
    <div className="shadow-xl fixed top-0 left-0 right-0 z-20 text-white ">
      <div className="max-x-[1540px] flex justify-between  bg-[#1A3636] mx-auto py-6 px-8  ">
        <nav className="w-full flex justify-between  items-center">
          <div className="flex-1 text-2xl font-bold tracking-widest hover:text-yellow-400 ">
            <Link to="/" className="">Hospital Management</Link>
          </div>
          <div className="hidden lg:flex flex-2 ">
            <div className="flex gap-6 ">
              <Link
                to="/"
                className="cursor-pointer hover:text-yellow-400 "
              >
                Home
              </Link>
              <Link
                to="/about"
                className="cursor-pointer hover:text-yellow-400 "
              >
                About
              </Link>
              <Link
                to="/appointment"
                className="cursor-pointer hover:text-yellow-400 "
              >
                Appointment
              </Link>
              {isAuth ? (
                <button
                  className="cursor-pointer hover:text-yellow-400 "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                 className="cursor-pointer hover:text-yellow-400 "
                  onClick={handleLogin}
                >
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
