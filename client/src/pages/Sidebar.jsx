import React, { useState,useContext } from "react";
import { TiHome } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import { toast } from "react-toastify";


const Sidebar2 = () => {
  const [show, setShow] = useState(false);
  const { isAuth, setIsAuth,setUser } = useContext(Context);

  const navigate = useNavigate()
  const gotoHome = () => {
    navigate("/admindashboard");
    setShow(false);
  };
  const gotoDoctors = () => {
    navigate("/admindashboard/all-doctors");
    setShow(false);
  };
  const gotoAddAdmin = () => {
    navigate("/admindashboard/add-new/admin");
    setShow(false);
  };
  const gotoAddDoctor = () => {
    navigate("/admindashboard/add-new/doctor");
    setShow(false);
  };
  const gotoMessage = () => {
    navigate("/admindashboard/all-messages");
    setShow(false);
  };
  const gotoPatient = () => {
    navigate("/admindashboard/all-patients");
    setShow(false);
  };
  const gotoLogout = async() => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/logout",{},
        { withCredentials: true }
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
      });
      setIsAuth(false);
      setUser({});
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Logout failed. Please try again."
      );
    }
  };

  return (
    <div className="flex  items-center justify-evenly ">
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoHome}>
        <TiHome className="text-3xl lg:text-3xl cursor-pointer text-blue-400 hover:bg-blue-600" />
        <p>Home</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoDoctors}>
        <FaUserDoctor className="text-3xl lg:text-3xl cursor-pointer text-green-400 hover:bg-green-600" />
        <p>View Doctors</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoAddAdmin}>
        <MdAddModerator className="text-3xl lg:text-3xl cursor-pointer text-yellow-400 hover:bg-yellow-600" />
        <p>New Admin</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoAddDoctor}>
        <IoPersonAddSharp className="text-3xl lg:text-3xl cursor-pointer text-purple-400 hover:bg-purple-600" />
        <p>New Doctors</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoMessage}>
        <AiFillMessage className="text-3xl lg:text-3xl cursor-pointer text-pink-400 hover:bg-pink-600" />
        <p>Messages</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={gotoPatient}>
        <FaUserFriends className="text-3xl lg:text-3xl cursor-pointer text-blue-400 hover:bg-blue-600" />
        <p>Patient</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer"onClick={gotoLogout}>
        <RiLogoutBoxFill className="text-3xl lg:text-2xl cursor-pointer text-red-400 hover:bg-red-600" />
        <p>Logout Admin</p>
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <GiHamburgerMenu className="cursor-pointer text-gray-900 text-3xl lg:text-3xl " />
      </div>
    </div>
  );
};

export default Sidebar2;
