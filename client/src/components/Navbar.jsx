import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link
                to="/login"
                className="cursor-pointer hover:underline hover:text-white hover:underline-offset-8 "
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
