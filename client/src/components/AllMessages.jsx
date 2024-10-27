import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { MdDelete } from "react-icons/md";

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuth } = useContext(Context);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/message/get-all-message",
          { withCredentials: true }
        );
        console.log(data);
        setMessages(data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessage();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/message/message-delete/${messageId}`,
        { withCredentials: true }
      );
      setMessages((prevMessage) =>
        prevMessage.filter((message) => message._id !== messageId)
      );
      toast.success(data?.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <section className="page mx-4 md:mx-10 lg:mx-20 p-5 md:p-10 h-screen rounded-3xl">
      <h1 className="text-xl md:text-2xl font-bold text-center text-indigo-600 mb-8">
        MESSAGE
      </h1>
      <div className="overflow-x-auto">
        {/* Responsive layout for mobile */}
        {messages && messages.length > 0 ? (
          <div className="md:hidden">
            {messages.map((element) => (
              <div key={element._id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                <h2 className="font-bold">{`${element.firstName} ${element.lastName}`}</h2>
                <p><strong>Email:</strong> {element.email}</p>
                <p><strong>Phone:</strong> {element.phone}</p>
                <p><strong>Message:</strong> {element.message.slice(0, 20) + (element.message.length > 20 ? "..." : "")}</p>
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(element._id)}
                  className="cursor-pointer text-red-500 mt-2"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">No Messages!</div>
        )}

        {/* Table layout for larger screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">First Name</th>
                <th className="py-2 px-4">Last Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((element, index) => (
                <tr key={element._id} className="hover:bg-gray-300">
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4 text-center">{element.firstName}</td>
                  <td className="py-2 px-4 text-center">{element.lastName}</td>
                  <td className="py-2 px-4 text-center">{element.email}</td>
                  <td className="py-2 px-4 text-center">{element.phone}</td>
                  <td className="py-2 px-4 text-center">
                    {element.message.slice(0, 20) +
                      (element.message.length > 20 ? "..." : "")}
                  </td>
                  <td className="py-2 px-4 text-center">
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(element._id)}
                      className="cursor-pointer text-red-500 mx-auto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllMessages;
