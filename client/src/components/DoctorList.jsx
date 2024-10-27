import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        console.log(data.doctor);
        setDoctors(data.doctor);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="px-5 py-20">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
        All Doctors
      </h1>
      
      {/* Responsive layout for mobile */}
      <div className="md:hidden">
        {doctors && doctors.length > 0 ? (
          doctors.map((ele, index) => (
            <div key={ele._id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
              <h2 className="font-bold">{`${ele.firstName} ${ele.lastName}`}</h2>
              <img src={ele.docImage.url} alt="doctor" className="w-24 h-24 rounded-full mx-auto" />
              <p><strong>Department:</strong> {ele.doctorDepartment}</p>
              <p><strong>NIC:</strong> {ele.nic}</p>
              <p><strong>Phone:</strong> {ele.phone}</p>
              <MdDelete
                size={25}
                // onClick={() => handleDelete(ele._id)}
                className="cursor-pointer text-red-600 mt-2"
              />
            </div>
          ))
        ) : (
          <div className="text-center">No Registered Doctor Found</div>
        )}
      </div>

      {/* Table layout for larger screens */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white p-1">
            <tr className="py-1">
              <th className="py-1 px-1 cursor-pointer text-lg">#</th>
              <th className="py-1 px-1 cursor-pointer text-lg">Image</th>
              <th className="py-1 px-1 cursor-pointer text-lg">Name</th>
              <th className="py-1 px-1 cursor-pointer text-lg">Department</th>
              <th className="py-1 px-1 cursor-pointer text-lg">NIC</th>
              <th className="py-1 px-1 cursor-pointer text-lg">Phone</th>
              <th className="py-1 px-1 cursor-pointer text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? (
              doctors.map((ele, index) => (
                <tr key={ele._id} className="hover:bg-gray-300">
                  <td className="py-2 text-center px-4 cursor-pointer">{index + 1}</td>
                  <td className="py-2 text-center px-4 cursor-pointer flex justify-center">
                    <img src={ele.docImage.url} alt="doctor-image" className='w-24' />
                  </td>
                  <td className="py-2 text-center px-4 cursor-pointer">{`${ele.firstName} ${ele.lastName}`}</td>
                  <td className="py-2 text-center px-4 cursor-pointer">{ele.doctorDepartment}</td>
                  <td className="py-2 text-center px-4 cursor-pointer">{ele.nic}</td>
                  <td className="py-2 text-center px-4 cursor-pointer">{ele.phone}</td>
                  <td>
                    <MdDelete
                      size={25}
                      // onClick={() => handleDelete(ele._id)}
                      className="cursor-pointer text-red-600 mx-auto text-3xl"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">No Registered Doctor Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
