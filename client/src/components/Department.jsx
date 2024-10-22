import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Department = () => {
  // copy departmentsArray form git hub
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl:
        "https://images.pexels.com/photos/4005611/pexels-photo-4005611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Orthopedics",
      imageUrl:
        "https://images.pexels.com/photos/8376326/pexels-photo-8376326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Cardiology",
      imageUrl:
        "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Neurology",
      imageUrl:
        "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Oncology",
      imageUrl:
        "https://images.pexels.com/photos/7659689/pexels-photo-7659689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Radiology",
      imageUrl:
        "https://images.pexels.com/photos/4226123/pexels-photo-4226123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Physical Therapy",
      imageUrl:
        "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Dermatology",
      imageUrl:
        "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "ENT",
      imageUrl:
        "https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="max-w-[1540px] mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Department</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departmentsArray.map((depart, index) => (
          <div
            key={index}
            className="relative gap-3 w-[460px] bg-white h-[350px] rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={depart.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white text-xl font-bold text-center">
              {depart.name}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Department;
