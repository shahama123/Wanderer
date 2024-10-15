import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-home bg-cover bg-no-repeat bg-fixed">
      <div className="items-center py-72 text-white ">
        <div className="flex justify-center md:text-6xl  hover:cursor-pointer text-5xl font-bold items-center">
          <h1>Travel Crazy</h1>
        </div>
        <div className="flex justify-center mt-10 md:text-xl text-base items-center hover:cursor-pointer">
          <p>Unleash your inner explorer and book your next adventure today!</p>
        </div>
        <div className="flex justify-center items-center mt-10 ">
          <button className="border rounded-full font-bold md:py-6 md:px-10 py-3 px-8 hover:bg-gray-100 hover:text-blue-gray-700 border-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
