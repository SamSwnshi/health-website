import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-[1540px] mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center min-h-screen rounded-md">
        <div className="flex flex-col lg:flex-row shadow-xl py-4 items-center">
          <div className="py-10 lg:w-1/2">
            <h1 className="text-yellow-500 text-2xl lg:text-[35px] text-center font-bold py-2">
              About Us
            </h1>
            <p className="text-black text-lg lg:text-[25px] text-center font-bold py-2">
              This is Our Hospital
            </p>
            <p className="text-center text-sm lg:text-base py-4 lg:py-8 px-4 font-light">
              Welcome to Our Hospital, a place where compassionate care meets
              advanced medical technology. We are dedicated to providing the
              highest quality healthcare services to our patients. With a team
              of highly skilled doctors, nurses, and healthcare professionals,
              we strive to create a welcoming and healing environment for
              everyone who walks through our doors. Whether it's routine
              check-ups or specialized treatments, we are committed to ensuring
              your well-being and recovery. Our hospital is equipped with
              state-of-the-art facilities, and we are proud to be a trusted
              healthcare provider for the community. Your health is our top
              priority, and we are here for you 24/7.
            </p>
            <div className="text-center">
              <button className="font-light bg-yellow-400 px-8 py-2 mt-4 rounded-xl text-black hover:text-red-500 hover:bg-gray-500">
                Read More
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2 mt-6 lg:mt-0">
            <img
              className="w-full max-w-xs lg:max-w-none lg:w-[700px] lg:h-[300px] object-cover rounded-lg"
              src="https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hospital"
            />
          </div>
        </div>

        <div className="mt-10 w-full flex flex-col items-center">
          <h1 className="text-center text-xl lg:text-2xl font-bold text-gray-800 underline underline-offset-8 mb-6">
            Also Our Hospital
          </h1>
          <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4  justify-center items-center  ">
            <div className="shadow-2xl bg-yellow-400 rounded-xl h-[140px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-black">300000</h1>
              <p className="font-light text-black">Patients</p>
            </div>
            <div className="shadow-2xl bg-yellow-400 rounded-xl h-[140px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-black">20000+</h1>
              <p className="font-light text-black">Doctors</p>
            </div>
            <div className="shadow-2xl bg-yellow-400 rounded-xl h-[140px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-black">100+</h1>
              <p className="font-light text-black">Rooms</p>
            </div>
            <div className="shadow-2xl bg-yellow-400 rounded-xl h-[140px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-black">24/7</h1>
              <p className="font-light text-black">Fast Services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-md mt-8">
        <button className="text-blue-600 underline underline-offset-8">
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
