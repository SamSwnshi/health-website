import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen mx-auto  py-8 mt-8">
      <div className="flex justify-center items-center min-h-screen rounded-md">
        <div className="w-full md:w-1/2 border rounded-3xl shadow-2xl p-8">
          <h1 className="text-[35px] font-bold hover:underline underline-offset-8 text-center cursor-pointer">
            Contact Us
          </h1>
          <div className="w-full mt-4">
            <form action="" className="w-full">
              <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer block">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First name"
                className="w-full p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-2"
              />

              <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Last name"
                className="w-full p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-2"
              />

              <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-2"
              />

              <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer block">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-2"
              />

              <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer block">
                Enter Your Message
              </label>
              <textarea
                placeholder="Enter Your Message"
                className="w-full h-[100px] p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-2"
              />

              <div className="flex justify-center mt-3">
                <button className="bg-green-500 text-white px-12 py-3 rounded-lg cursor-pointer hover:bg-[#686968] hover:text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
