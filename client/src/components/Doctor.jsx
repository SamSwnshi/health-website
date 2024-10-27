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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
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
    <div className="max-w-[1200px] mx-auto py-12 px-4 md:px-8 overflow-hidden">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Our Doctors
      </h1>
      <Slider {...settings} className="w-full mt-[20px] gap-5">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="flex flex-col justify-center gap-3 items-center w-full h-auto rounded-lg"
          >
            <img
              src={doctor.docImage?.url}
              alt={`Doctor ${doctor.firstName}`}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain px-4 rounded-xl cursor-pointer mb-3"
            />
            <div className="text-center mt-4 mb-2">
              <p className="font-bold text-lg md:text-xl">
                {doctor.firstName} {doctor.lastName}
              </p>
              <p className="text-md md:text-lg font-medium text-gray-700">
                {doctor.doctorDepartment}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
