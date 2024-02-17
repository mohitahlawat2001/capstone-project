import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-medium text-center mb-5">About Us</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <img
          src="favicon.ico"
          alt="Company Logo"
          className="w-64 h-64 rounded-full object-cover mb-5 md:mb-0"
        />
        <div className="text-center md:text-left">
          <p className="text-gray-600">
            Welcome to our e-commerce site! We are a team of passionate individuals
            dedicated to providing you with the best online shopping experience.
            Our mission is to offer a wide selection of quality products at
            competitive prices, along with exceptional customer service.
          </p>
          <p className="text-gray-600 mt-5">
            site made for bounty challenge to give idea how make e-commerce site can improved and how to make it more user friendly
                      
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;