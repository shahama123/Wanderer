import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Booking = () => {
  return (
    <div className="bg-orange-900 py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <RevealOnScroll>
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white max-w-lg font-bold text-center mb-8 sm:mb-10 md:mb-12 hover:cursor-pointer">
            Book Your Next Adventure Today!
          </h1>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-16">
          <input
            className="rounded-full py-4 sm:py-6 w-full sm:w-80 px-4 sm:px-6 md:px-7 text-black"
            type="email"
            placeholder="test@email.com"
          />
          <button className="rounded-full text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-6 sm:px-6 bg-blue-500 hover:bg-blue-700">
            Start Exploring!
          </button>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Booking;
