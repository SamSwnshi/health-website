import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import axios from "axios";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        console.log(data.doctor);
        toast.success("Doctors fetched successfully!", {
          position: "top-center",
          autoClose: 3000,
        }); 
        setDoctors(data.doctor);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch doctors."
        );
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="max-w-[1540px] mx-auto py-12 overflow-hidden ">
      <h1 className="text-center text-4xl font-bold mb-8">Our Doctors</h1>
      <Slider {...settings} className="w-[1540px] h-[600px] mt-[20px] gap-5">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="flex flex-col justify-center gap-5 items-center w-full h-[600px] rounded-lg "
          >
            <img
              src={doctor.docImage?.url}
              alt={`Doctor ${doctor.firstName}`}
              className="object-cover w-full h-full px-4 rounded-xl cursor-pointer mb-3"
            />
            <div className="flex items-center justify-evenly text-center mt-4 mb-2">
              <p className="font-bold text-xl">
                {doctor.firstName} {doctor.lastName}
              </p>
              <p className="font-bold text-lg">{doctor.doctorDepartment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
