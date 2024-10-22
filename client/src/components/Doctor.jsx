import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Doctor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows for left and right navigation
  };
  const doctors = [
    {
      id: 1,
      doctorImage:
        "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
    },
    {
      id: 2,
      doctorImage:
        "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
    },
    {
      id: 3,
      doctorImage:
        "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
    },
    {
      id: 4,
      doctorImage:
        "https://images.pexels.com/photos/4586744/pexels-photo-4586744.jpeg?cs=srgb&dl=pexels-shvetsa-4586744.jpg&fm=jpg&_gl=1*wesyy5*_ga*MTAxNTIwNzI1Ny4xNzE5NzQ0Njc3*_ga_8JE65Q40S6*MTcyOTUzMTAxMi4zMC4xLjE3Mjk1MzI1NjAuMC4wLjA.",
    },
  ];

  return (
    <div className="max-w-[1540px] mx-auto py-12 overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-8">Our Doctors</h1>
      <Slider {...settings}>
        {doctors.map((items)=>(
          <>
          <div key={items.id} className="flex justify-center gap-5 items-center w-full h-[600px] rounded-lg">
            <img src={items.doctorImage}  className="object-cover w-full h-full px-4 rounded-xl cursor-pointer"/>
          </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
