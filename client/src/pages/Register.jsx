import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
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

  const handleRegister = async(e) =>{
    e.preventDefault();
    try{
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
      setDob("");
      setEmail("");
      setFirstName("");
      setGender("");
      setLastName("");
      setNic("");
      setPhone("");
      setPassword("")

    }catch(error){
      console.log("Registration Error!",error.message)
      if(error.response  && error.response.data){
        toast.error(error.response.data.message)
      }else{
        toast.error("Registration Failed! Please Try Again!")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex justify-center items-center py-24 rounded-md">
        <div className="px-4 bg-white p-2 py-6 w-full lg:max-w-[650px] md:max-w-[500px] max-w-[300px] mx-auto flex flex-col rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center py-8 text-xl md:text-2xl font-bold text-red-700">
              Register Page
            </h2>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleRegister}>
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full md:w-1/2 p-3 border   rounded-md outline-none shadow-md"
                />
              </div>
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
              </div>
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
              </div>
              <div className="flex gap-6">
                <select
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="phone"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full md:w-1/2 p-3 border  rounded-md outline-none shadow-md"
                />
              </div>
              <div className="flex justify-center">
                <p>Already have an account?</p>
                <Link to={"/login"} className="text-blue-600 hover:underline">
                  Login Now
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="px-5 w-full py-1 rounded-lg cursor-pointer
                 bg-yellow-200 text-lg text-black text-center border-2
                  border-transparent hover:border-3"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
