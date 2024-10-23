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
    const fetchDotors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        setDoctors(data.doctor);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch doctors."
        );
      }
    };
    fetchDotors();
  },[]);

  // const doctors = [
  //   {
  //     id: 1,
  //     doctorImage:
  //       "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
  //   },
  //   {
  //     id: 2,
  //     doctorImage:
  //       "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
  //   },
  //   {
  //     id: 3,
  //     doctorImage:
  //       "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
  //   },
  //   {
  //     id: 4,
  //     doctorImage:
  //       "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
  //   },
  // ];

  return (
    <div className="max-w-[1540px] mx-auto py-12 overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-8">Our Doctors</h1>
      <Slider {...settings}  className="w-[1540px] 0 h-[400px] mt-[30px] gap-5">
        {doctors.map((items) => (
          <>
            <div
              key={items._id}
              className="flex justify-center gap-5 items-center w-full h-[600px] rounded-lg"
            >
              <img
                src={items.docImage.url}
                alt={`Doctor ${items._id}`}
                className="object-cover w-full h-full px-4 rounded-xl cursor-pointer"
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
