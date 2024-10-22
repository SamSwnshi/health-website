import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="max-w-[1540px] mx-auto px-2 py-12 justify-center items-center">
        <div className="flex flex-col justify-center items-center min-h-screen rounded-md">
          <div className="flex shadow-xl py-4  items-center">
            <div className="py-10 w-1/2">
              <h1 className="text-yellow-500 text-[35px] text-center cursor-pointer font-bold py-2">
                About Us
              </h1>
              <p className="text-black text-[25px] text-center cursor-pointer font-bold py-2">
                This is Our Hospitals
              </p>
              <p className="text-center text-light py-8 px-2 cursor-pointer font-light">
                Welcome to Our Hospital, a place where compassionate care meets
                advanced medical technology. We are dedicated to providing the
                highest quality healthcare services to our patients. With a team
                of highly skilled doctors, nurses, and healthcare professionals,
                we strive to create a welcoming and healing environment for
                everyone who walks through our doors. Whether it's routine
                check-ups or specialized treatments, we are committed to
                ensuring your well-being and recovery. Our hospital is equipped
                with state-of-the-art facilities, and we are proud to be a
                trusted healthcare provider for the community. Your health is
                our top priority, and we are here for you 24/7.
              </p>
              <div className="text-center">
                <button className="font-light bg-[yellow] px-12 cursor-pointer py-2 rounded-xl text-black hover:text-red-500 hover:bg-[#646664]">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex justify-center w-1/2 tm-5">
              <img
                className="w-[700px] h-[300px] object-cover rounded-lg cursor-pointer"
                src="https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-center py-1 cursor-pointer text-[20px] font-bold text-[#222] underline underline-offset-8">
              Also Our Hospital{" "}
            </h1>
            <div className="grid grid-cols-2 justify-around items-center py-4 px-3 gap-4">
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  300000
                </h1>
                <p className="text-center cursor-pointer justify-center text-[black] items-center font-light">
                  Patients
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  20000+
                </h1>
                <p className="text-center cursor-pointer justify-center text-[black] items-center font-light">
                  Doctors
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  100+
                </h1>
                <p className="text-center cursor-pointer justify-center text-[black] items-center font-light">
                  Room
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  24/7
                </h1>
                <p className="text-center cursor-pointer justify-center text-[black] items-center font-light">
                  Fast Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-md">
        <button className=" text-center py-4 text-blue-600 underline underline-offset-8">
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
