import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("Patient");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password, roles },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      navigate("/");
      setEmail("");
      setPassword("");
      setRoles("Patient");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex justify-center items-center py-24 rounded-md">
        <div className="px-4 bg-white p-2 py-6 w-full lg:max-w-[650px] md:max-w-[500px] max-w-[500px] mx-auto flex flex-col rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center py-8 text-xl md:text-2xl font-bold text-red-700">
              Login Page
            </h2>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full  p-3 border  rounded-md outline-none shadow-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full  p-3 border  rounded-md outline-none shadow-md"
                />
                <select
                  className="w-full bg-gray-300 p-3 border  rounded-md outline-none shadow-md"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <div className="flex justify-center">
                <p>Don't have a Account?</p>{" "}
                <Link
                  to={"/register"}
                  className="text-blue-600 hover:underline"
                >
                  Register Now
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="px-5 w-full py-1 rounded-lg cursor-pointer
               bg-yellow-200 text-lg text-black text-center border-2
                border-transparent hover:border-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
