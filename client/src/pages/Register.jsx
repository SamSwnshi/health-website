import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex justify-center items-center py-24 rounded-md">
        <div className="px-4 bg-white p-2 py-6 w-full lg:max-w-[650px] md:max-w-[500px] max-w-[300px] mx-auto flex flex-col rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center py-8 text-xl md:text-2xl font-bold text-red-700">
              Register Page
            </h2>
            <form className="flex flex-col gap-6 w-full">
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 p-3 border   rounded-md outline-none shadow-md"
                />
              </div>
              <div className="flex gap-6">
                <input type="text" placeholder="Email"  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"/>
                <input type="password" placeholder="Password"  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"/>
              </div>
              <div className="flex gap-6">
                <input type="text" placeholder="NIC" className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"/>
                <input type="date" placeholder="Date of Birth" className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"/>
              </div>
              <div className="flex gap-6">
                <select className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="phone" placeholder="Mobile Number" className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"/>
              </div>
              <div className="flex justify-center">
                <p>Already have an account?</p>
                <Link to={"/login"} className="text-blue-600 hover:underline">Login Now</Link>
              </div>
              <div className="flex justify-center items-center">
                <button   className="px-5 w-full py-1 rounded-lg cursor-pointer
                 bg-yellow-200 text-lg text-black text-center border-2
                  border-transparent hover:border-3">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
