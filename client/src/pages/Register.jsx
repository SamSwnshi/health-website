import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/create-patient", {
        firstName, lastName, email, nic, phone, dob, gender, password, roles: "Patient",
      }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
      });
      navigate("/login");

      // Clear the input fields after successful registration
      setDob("");
      setEmail("");
      setFirstName("");
      setGender("");
      setLastName("");
      setNic("");
      setPhone("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Registration Failed! Please Try Again!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <section className="flex justify-center items-center py-12 md:py-24 w-full">
        <div className="bg-white w-full max-w-xs md:max-w-md lg:max-w-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-red-700 mb-8">
            Register Page
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                className="w-full p-3 border rounded-md outline-none shadow-md"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-md outline-none shadow-md"
              />
            </div>
            <div className="text-center text-sm mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login Now
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-lg bg-yellow-200 text-lg font-medium text-black border-2 border-transparent hover:border-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
