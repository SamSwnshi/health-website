import React from "react";

const AppointmentForm = () => {
  const departmentsName = [
    "Pediatrice",
    "ENT",
    "Orthopedic",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-6">
      <div className="w-1/2 h-full border-2 border-red-900 p-6 shadow-xl text-center rounded-lg ">
        <h1 className="text-2xl font-semibold  mb-4">Appointment</h1>
        <form action="" >
          <div className="flex justify-between gap-6  mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="flex justify-between gap-6  mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="phone"
              placeholder="Enter Phone Number"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="flex justify-between gap-6  mb-4">
            <input
              type="number"
              placeholder="NIC"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
            <input
              type="date"
              placeholder="Enter Date of Birth"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="flex justify-between gap-6  mb-4">
            <select
              name=""
              id=""
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            />
          </div>
          <div className="flex justify-between gap-6  mb-4">
            <select
              name=""
              id=""
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              {departmentsName.map((items, index) => (
                <>
                  <option key={index} value={items}>
                    {items}
                  </option>
                </>
              ))}
            </select>
            <select
              name=""
              id=" "
              className="w-full border border-gray-300 p-3 rounded-md outline-none shadow-md"
            >
              <option value="">Select Doctor</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md mb-4 mt-2"
          />
          <div className="flex items-center text-center justify-center gap-4 mb-4">
            <p className="mb-0 text-center cursor-pointer justify-center">
              Have you Visited Before?
            </p>
            <input type="checkbox" className="w-6 h-6 rounded-full border-2" />
          </div>
          <button
            className="mx-auto bg-blue-400 text-black w-full 
          cursor-pointer hover:text-white py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
