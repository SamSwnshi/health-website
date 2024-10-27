import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const AllPatient = () => {
  const [patients, setPatients] = useState([]);
  const { isAuth } = useContext(Context);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-patient",
          { withCredentials: true }
        );
        console.log(data);
        setPatients(data.patient);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchPatient();
  }, []);

  const handleDelete = async (patientId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/user/delete/patient/${patientId}`,
        { withCredentials: true }
      );
      setPatients((prevPatients) =>
        prevPatients.filter((patient) => patient._id !== patientId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="p-4 md:p-10 lg:p-20">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
        All Patients
      </h1>
      <div className="w-full overflow-x-auto">
        {/* Responsive layout for mobile */}
        {patients && patients.length > 0 ? (
          <div className="md:hidden">
            {patients.map((ele) => (
              <div key={ele._id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                <h2 className="font-bold">{`${ele.firstName} ${ele.lastName}`}</h2>
                <p><strong>Email:</strong> {ele.email}</p>
                <p><strong>NIC:</strong> {ele.nic}</p>
                <p><strong>Phone:</strong> {ele.phone}</p>
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(ele._id)}
                  className="cursor-pointer text-red-600 mt-2"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">No Registered Patients Found</div>
        )}
        
        {/* Table layout for larger screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 cursor-pointer text-lg">#</th>
                <th className="py-2 px-4 cursor-pointer text-lg">Name</th>
                <th className="py-2 px-4 cursor-pointer text-lg">Email</th>
                <th className="py-2 px-4 cursor-pointer text-lg">NIC</th>
                <th className="py-2 px-4 cursor-pointer text-lg">Phone</th>
                <th className="py-2 px-4 cursor-pointer text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((ele, index) => (
                <tr key={ele._id} className="hover:bg-gray-300">
                  <td className="py-2 text-center px-2">{index + 1}</td>
                  <td className="py-2 text-center px-2">{`${ele.firstName} ${ele.lastName}`}</td>
                  <td className="py-2 text-center px-2">{ele.email}</td>
                  <td className="py-2 text-center px-2">{ele.nic}</td>
                  <td className="py-2 text-center px-2">{ele.phone}</td>
                  <td className="py-2 text-center px-2">
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(ele._id)}
                      className="cursor-pointer text-red-600 mx-auto text-2xl"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPatient;
