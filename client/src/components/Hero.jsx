import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1540px] min-h-screen mx-auto pt-10 flex flex-col items-center overflow-hidden">
      <div className="w-full h-[600px] py-4">
        <div className="relative w-full h-full group">
          <div
            className="absolute w-full h-full bg-red-300/80 
              text-black flex flex-col justify-center items-center opacity-0 
              group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <p className="font-bold text-4xl px-4 text-center">
              Hospital Management System
            </p>
            <p className="px-4 text-center py-4 text-xl">
              Our hospital management system provides state-of-the-art 
              solutions to ensure seamless operations. We are committed to 
              delivering top-notch medical services with comprehensive 
              patient care and efficient management.
              <br />
              From scheduling doctor appointments to maintaining medical 
              records, our system ensures a streamlined experience for both 
              patients and healthcare professionals. Experience the future 
              of healthcare with our advanced hospital management system.
            </p>
            <div className="text-center">
              <button
                className="mt-4 border-white bg-white text-black px-4 py-2
                  rounded-md hover:border-2 hover:border-pink-500"
              >
                Book Your Doctor Appointment
              </button>
            </div>
          </div>
          <img
            className="w-full h-full object-cover bg-red-600/50 group-hover:bg-transparent transition-all duration-500 ease-in-out"
            src="https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hospital"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;