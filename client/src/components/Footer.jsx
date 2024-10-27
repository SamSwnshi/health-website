import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-xl bg-red-900 text-white">
      <footer className="max-w-full mx-auto py-4 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="flex-1 mb-6  text-center">
            <h1 className="text-lg  sm:text-xl font-bold cursor-pointer mb-4">
              Hospital Management System
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam tenetur dolor, ut distinctio ratione impedit. Asperiores,
              quia et!
            </p>
          </div>
          <div className="flex-1 mb-6  flex flex-col items-center ">
            <div>
              <h4 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
                Quick Links
              </h4>
            </div>

            <div className="flex">
              <ul className="flex space-x-4">
                {" "}
                {/* Change space-y-1 to space-x-4 for horizontal spacing */}
                {[
                  "Home",
                  "About",
                  "Services",
                  "Contact",
                  "Privacy And Policy",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/ /g, "")}`}
                      className="text-gray-200 hover:text-black  sm:text-base" style={{ fontSize: '15px' }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mb-6  text-center">
            <h4 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
              Contact
            </h4>
            <div className="flex justify-center gap-4 mb-2">
              <FaFacebookSquare className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaSquareInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaGithub className="text-2xl cursor-pointer hover:text-gray-300" />
            </div>
            <div className="flex items-center justify-evenly gap-2 mb-1 text-sm sm:text-base text-center">
              <p>9848528770</p>
              <p>hotelmanagement@gmail.com</p>
            </div>
          
            
          </div>
        </div>
      </footer>
      <p className="flex justify-center border-t border-gray-700 py-2 text-sm">
        &copy; CopyRight By Sameer
      </p>
    </div>
  );
};

export default Footer;
