import React from "react";

const MessageForm = () => {
  return (
    <div className="max-w-[1540px] mx-auto py-12 mb-2 px-4 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Send Message To Us</h2>
      <form action="" className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
          <input
            type="phone"
            placeholder="Enter Your PhoneNo"
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
          
        </div>
        <textarea
          placeholder="Message Lenght More than 10 Digits"
          rows="7"
        
          className="w-full p-3 text-md border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
        />
        <div className="flex justify-center mb-4">
          <button className="bg-yellow-500 text-black py-2 px-24 rounded hover:bg-blue-600">
            Message Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
