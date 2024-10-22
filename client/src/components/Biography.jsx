import React from "react";

const Biography = () => {
  return (
    <section className="py-12">
      {/* Title */}
      <div className="container mx-auto">
        <p className="text-4xl font-bold text-gray-900 text-center mb-8">
          Biography
        </p>

        {/* Main Content */}
        <div className="flex flex-col justify-evenly md:flex-row gap-8 px-4">
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Who We Are"
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are dedicated to providing innovative and efficient solutions
              for healthcare management. Our team is focused on delivering
              top-quality services that simplify operations, improve patient
              care, and enhance overall hospital efficiency. With our system,
              healthcare professionals can focus on what truly matters—caring
              for patients.
            </p>

            {/* Vision & Mission */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We are in 2024! Working diligently on Hospital Management Systems
              to ensure seamless healthcare operations for the future.
            </p>

            {/* More Information */}
            <p className="text-lg text-gray-700 leading-relaxed">
              This is the first phase of our Hospital Management System,
              designed to improve patient care and operational efficiency. Stay
              tuned for phase two, which will be coming later this year!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
