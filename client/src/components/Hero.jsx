import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleAppointment = () => {
    navigate("/appointment");
  };

  return (
    <div className="w-full min-h-screen mx-auto pt-10 flex flex-col items-center overflow-hidden">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] pt-5">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/6010873/pexels-photo-6010873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hospital"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 px-4">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center w-full flex justify-center items-center">
            Hospital Management System
          </p>
          <p className="text-sm sm:text-sm md:text-lg lg:text-xl text-center ">
            Our hospital management system provides state-of-the-art solutions
            to ensure seamless operations. We are committed to delivering
            top-notch medical services with comprehensive patient care and
            efficient management.
            <br />
            From scheduling doctor appointments to maintaining medical records,
            our system ensures a streamlined experience for both patients and
            healthcare professionals. Experience the future of healthcare with
            our advanced hospital management system.
          </p>
          <div className="text-center">
            <button
              className="mt-4 border-white bg-white text-black p-4 sm:px-4 sm:py-2 rounded-md hover:border-2 hover:border-pink-500 transition duration-300"
              onClick={handleAppointment}
            >
              Book Your Doctor Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
