import React from "react";
import img1 from "../assets/card1.jpeg";
import img2 from "../assets/card2.jpeg";
import img3 from "../assets/card3.jpeg";
import img4 from "../assets/card4.jpeg";
import RevealOnScroll from "./RevealOnScroll";

const ImageCard = () => {
  return (
    <div className="pt-20 pb-10 px-5 relative">
      <RevealOnScroll>
        <div>
          <h1 className="text-4xl sm:text-5xl text-center font-bold hover:cursor-pointer z-10">
            {/* Ensuring it appears on top */}
            Latest Travel Buzz
          </h1>
        </div>
      </RevealOnScroll>
      {/* Added relative positioning */}
      <RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 relative">
          {/* Added relative positioning */}
          <div className="relative group">
            <img
              className="w-full h-72 rounded-[30px] object-cover transition-transform duration-300"
              src={img1}
              alt="Travel Image 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[30px] text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-xl font-bold">August 20, 2024</h2>
              <p className="mt-2 text-center">
                Discover the hottest travel spots for the upcoming year! Don't
                miss out on these must-visit locations.
              </p>
              <button className="mt-4 bg-blue-600 text-xl text-white rounded-full px-5 py-2 hover:bg-blue-400 transition-colors">
                Explore!
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-72 rounded-[30px] object-cover transition-transform duration-300"
              src={img2}
              alt="Travel Image 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[30px] text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-xl font-bold">August 18, 2024</h2>
              <p className="mt-2 text-center">
                Get insider advice from seasoned travelers. Learn how to travel
                smart and save big!
              </p>
              <button className="mt-4 bg-blue-600 text-xl text-white rounded-full px-5 py-2 hover:bg-blue-400 transition-colors">
                Explore!
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-72 rounded-[30px] object-cover transition-transform duration-300"
              src={img3}
              alt="Travel Image 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[30px] text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-xl font-bold">August 15, 2024</h2>
              <p className="mt-2 text-center">
                From skydiving to culinary tours, find experiences that will
                blow your mind!
              </p>
              <button className="mt-4 bg-blue-600 text-xl text-white rounded-full px-5 py-2 hover:bg-blue-400 transition-colors">
                Explore!
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-72 rounded-[30px] object-cover transition-transform duration-300"
              src={img4}
              alt="Travel Image 4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[30px] text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <h2 className="text-xl font-bold">August 10, 2024</h2>
              <p className="mt-2 text-center">
                Explore amazing destinations without breaking the bank.
              </p>
              <button className="mt-4 bg-blue-600 text-xl text-white rounded-full px-5 py-2 hover:bg-blue-400 transition-colors">
                Explore!
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default ImageCard;
