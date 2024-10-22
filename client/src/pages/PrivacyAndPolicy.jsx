import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="max-w-[1540px] mx-auto justify-center items-center ">
      <div className="flex justify-center items-center py-20">
        <div className="w-[1540px]  justify-center items-center shadow-lg rounded-xl py-4">
          <h1 className="text-center text-[35px]    py-8 font-bold">
            Hospital Management System Privacy and Policy{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-[600px] h-[500px]">
              <img
                src="https://images.pexels.com/photos/676164/pexels-photo-676164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-[100%] object-cover cursor-pointer py-4 px-6 rounded-lg"
              />
            </div>
            <div className="cursor-pointer w-[700px]">
              <h1 className="text-center text-[25px] w-full py-4  font-bold">
                Privacy Fast
              </h1>
              <p className="text-light py-2 px-3 w-full">
              At our hospital, we prioritize the privacy of our patients and 
                ensure that their personal data is protected. Our system is designed 
                to safeguard all sensitive information and comply with industry standards. 
                We are dedicated to maintaining transparency in how we handle your data.
              </p>
              <div className="mt-4 w-full flex justify-center">
                <ul className="flex flex-col gap-5 cursor-pointer">
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                  Comprehensive data protection protocols
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                  Secure patient record management
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                  Compliance with legal and ethical standards
                  </li>
                  
                </ul>
              </div>
              <div className="text-center py-6">
                <button className="px-5 py-2 bg-[yellow] rounded-xl text-black cursor-pointer hover:bg-[#484948] hover:text-white">
                Learn More About Our Policies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
