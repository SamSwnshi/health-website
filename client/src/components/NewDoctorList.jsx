import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const NewDoctorList = () => {
  const { isAuth, setIsAuth } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docImage, setDocImage] = useState(null);
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocAvatarPreview(reader.result);
        setDocImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewDoctors = async (e) => {
    e.preventDefault();
    if (!docImage) {
      console.log("Doctor image is Required!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docImage", docImage);
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user/create-new-doctor",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Doctor registration failed"
      );
    }
  };

  return (
    <section className="flex justify-center items-center py-10 md:py-20">
      <section className="max-w-[90%] md:max-w-[1240px] mx-auto bg-gray-100 p-5 md:p-8 lg:p-10 xl:p-12 h-auto rounded-[15px] shadow-xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black mb-7 font-bold text-center">
          REGISTER A NEW DOCTOR
        </h1>
        <form onSubmit={handleNewDoctors} className="flex flex-col items-center gap-5">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <img
              src={
                docAvatarPreview
                  ? `${docAvatarPreview}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QhjRJKfxNsyqz7vTVU5hmOJfiAjeeEfrlg&s"
              }
              alt="Doctor"
              className="w-full md:w-[300px] h-auto max-h-[300px] rounded-lg transition-all duration-300 ease-in-out"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatar}
              className="w-full md:w-auto border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Input fields */}
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            />
            <select
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
              required
            >
              <option value="">Select Department</option>
              {departmentsArray.map((depart, index) => (
                <option value={depart} key={index}>
                  {depart}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-5 text-lg md:text-xl p-3 rounded-lg border border-gray-300 shadow-md bg-gradient-to-r from-purple-400 to-indigo-700 text-white font-bold transition-all duration-300 ease-in-out hover:from-purple-500 hover:to-indigo-800"
          >
            Register New Doctor
          </button>
        </form>
      </section>
    </section>
  );
};

export default NewDoctorList;
