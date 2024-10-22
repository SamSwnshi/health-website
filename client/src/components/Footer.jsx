import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM to 11:00 PM" },
    { id: 2, day: "Tuesday", time: "9:00 AM to 11:00 PM" },
    { id: 3, day: "Wednesday", time: "9:00 AM to 11:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM to 11:00 PM" },
    { id: 5, day: "Friday", time: "9:00 AM to 11:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM to 11:00 PM" },
  ];
  return (
    <div className=" shadow-xl bg-red-900 text-white">
      <footer className="max-w-[1540px] mx-auto py-4 px-8 ">
        <div  className="flex flex-wrap gap-6">
          <div className="flex-1">
            <h1 className="text-xl font-bold cursor-pointer">Hospital Managements System</h1>
            <p className="text-gray-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam tenetur dolor, ut distinctio ratione impedit. Asperiores, quia et!</p>
          </div>
          <div className="flex-1">
            <h4  className="text-xl font-bold cursor-pointer mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to={"/"} className="text-gray-200 hover:text-black">Home</Link>
              </li>
              <li>
                <Link to={"/about"} className="text-gray-200 hover:text-black">About</Link>
              </li>
              <li>
                <Link to={"/services"} className="text-gray-200 hover:text-black">Services</Link>
              </li>
              <li>
                <Link to={"/contact"} className="text-gray-200 hover:text-black">Contact</Link>
              </li>
              <li>
                <Link to={"/privacyandpolicy"} className="text-gray-200 hover:text-black">Privacy And Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold cursor-pointer mb-4">Hours</h4>
            <ul className="space-y-2">
              {hours.map((items)=>(
                <li key={items.id}  className="flex justify-between ">
                  <span>{items.day}</span>
                  <span>{items.time}</span>
                  
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold cursor-pointer mb-4">Contact</h4>
            <div  className="flex items-center gap-2 mb-2">
              <span>9848528770</span>
            </div>
            <div  className="flex items-center gap-2 mb-2">
              <span>hotelmanagement@gmail.com</span>
            </div>
            <div  className="flex items-center gap-2 mb-2">
              <span>India</span>
            </div>
          </div>
          <div  className="flex justify-between gap-4 cursor-pointer items-center">
            {/* //NOTE - add icons */}
          </div>

        </div>
      </footer>
      <p className="flex justify-center">&copy; CopyRight By Sameer</p>
    </div>
  );
};

export default Footer;
