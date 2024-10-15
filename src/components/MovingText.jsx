import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import RevealOnScroll from "./RevealOnScroll";

const MovingText = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <RevealOnScroll>
        <Marquee className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Seamless Booking Experience Just for You * Discover Hidden Gems Around
          the World *
        </Marquee>
      </RevealOnScroll>

      <RevealOnScroll>
        <Marquee className="mt-16">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img1}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img2}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img3}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img4}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img5}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img6}
            alt="Travel destination"
          />
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl hover:scale-110 mx-3 sm:mx-4 md:mx-5 lg:mx-6 transition-transform"
            src={img7}
            alt="Travel destination"
          />
        </Marquee>
      </RevealOnScroll>
    </div>
  );
};

export default MovingText;
