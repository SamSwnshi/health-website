
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const AllPatient = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuth } = useContext(Context);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-patient",
          { withCredentials: true }
        );
        console.log(data);
        setDoctors(data.patient);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchPatient();
  }, []);

  // if (!isAuthenticated) {
  //   <Navigate to="/login" />;
  // }

  const handleDelete = async (patientId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/user/delete/patient/${patientId}`,
        { withCredentials: true }
      )
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor._id !== patientId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" p-20 ">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
        All Patients{" "}
      </h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full mx-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white py-2">
            <tr className="py-2">
              <th className="py-2  cursor-pointer text-lg">#</th>
              <th className="py-2  cursor-pointer text-lg">Name </th>
              <th className="py-2 cursor-pointer text-lg">Email</th>
              <th className="py-2  cursor-pointer text-lg">NIC</th>
              <th className="py-2  cursor-pointer text-lg">Phone</th>
              <th className="py-2  cursor-pointer text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? (
              doctors.map((ele, index) => (
                <tr key={ele._id} className="hover:bg-gray-300 ">
                  <td className="py-2 text-center px-2 cursor-pointer">
                    {index + 1}
                  </td>

                  <td className="py-2 text-center px-2 cursor-pointer">{`${ele.firstName} ${ele.lastName}`}</td>
                  <td className="py-2 text-center px-2 cursor-pointer">
                    {ele.email}
                  </td>
                  <td className="py-2 text-center px-2 cursor-pointer">
                    {ele.nic}
                  </td>
                  <td className="py-2 text-center px-2 cursor-pointer">
                    {ele.phone}
                  </td>
                  <td>
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(ele._id)}
                      className="cursor-pointer text-red-600 mx-auto text-3xl"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Registered Patients Founds</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatient;
