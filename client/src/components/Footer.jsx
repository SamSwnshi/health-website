import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-xl bg-[#1A3636] text-white">
      <footer>
        <div className="flex flex-col md:flex-row py-4">
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h1 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
              Hospital Management
            </h1>
            <p className="px-4 md:px-0">
              Our hospital management system streamlines medical processes,
              enhances patient care, and supports healthcare professionals in
              delivering efficient, high-quality service.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-7">
              <div>
                <p>Home</p>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-black sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>About</p>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-black sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>Contact</p>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-black sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>Privacy And Policy</p>
                <Link
                  to="privacyandpolicy"
                  className="text-gray-200 hover:text-black sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
              Contact
            </h4>
            <div className="flex justify-center gap-4 mb-2">
              <a href="https://www.facebook.com/sameer.suryawanshi1" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="text-2xl cursor-pointer hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/sameer-suryawanshi/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/_sameer_suryawanshi_/" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
              </a>
              <a href="https://github.com/SamSwnshi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl cursor-pointer hover:text-gray-300" />
              </a>
            </div>
            {/* <p>hospitalmanagement@gmail.com</p> */}
          </div>
        </div>
      </footer>
      <p className="flex justify-center border-t border-gray-700 p-2 text-sm">
        &copy; CopyRight By Sameer
      </p>
    </div>
  );
};

export default Footer;
