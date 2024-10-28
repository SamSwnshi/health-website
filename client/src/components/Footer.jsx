import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-xl bg-[#1A3636] text-white">
      <footer>
        <div>
          <div>
            <h1 className="text-lg  sm:text-xl font-bold cursor-pointer mb-4">
              Hospital Management
            </h1>
            <p>
              Our hospital management system streamlines medical processes,
              enhances patient care, and supports healthcare professionals in
              delivering efficient, high-quality service.
            </p>
          </div>
          <div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold cursor-pointer mb-4">
                Quick Links
              </h4>
            </div>

            <div className="flex">
              <div>
                <p>Home</p>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-black  sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>About</p>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-black  sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>Contact</p>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-black  sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
              <div>
                <p>Privacy And Policy</p>
                <Link
                  to="privacyandpolicy"
                  className="text-gray-200 hover:text-black  sm:text-base"
                  style={{ fontSize: "15px" }}
                />
              </div>
            </div>
          </div>
          <div>
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
