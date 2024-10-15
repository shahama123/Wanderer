import React from "react";
import img1 from "../assets/travel1.jpeg";
import img2 from "../assets/travel2.jpeg";
import RevealOnScroll from "./RevealOnScroll";

const Travel = () => {
  return (
    <div className="py-10 px-5 sm:px-10 md:px-20 lg:px-32">
      <RevealOnScroll>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center hover:cursor-pointer">
          Explore Your Next Adventure
        </h1>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row mt-16 gap-6">
          {/* First Image and Content */}

          <div className="flex flex-col items-center md:w-8/12">
            <img
              className="w-full  h-72 md:h-96 rounded-3xl hover:scale-105 transition-transform duration-300"
              src={img1}
              alt="Travel Destination 1"
            />
            <div className="text-center mt-4 md:mt-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Book Your Dream Trip
              </h2>
              <p className="text-lg md:text-xl mt-2">
                Find and book amazing travel experiences today!
              </p>
            </div>
          </div>

          {/* Second Image and Content */}

          <div className="flex flex-col items-center md:w-4/12">
            <img
              className="w-full h-72 md:h-96 rounded-3xl hover:scale-105 transition-transform duration-300"
              src={img2}
              alt="Travel Destination 2"
            />
            <div className="text-center mt-4 md:mt-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Discover Hidden Gems
              </h2>
              <p className="text-lg md:text-xl mt-2">
                Uncover secret travel spots.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Travel;
