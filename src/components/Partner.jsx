import React from "react";
import img1 from "../assets/download 2.jpeg";
import img2 from "../assets/download 3.jpg";
import img3 from "../assets/download 4.jpeg";
import img4 from "../assets/download 5.jpeg";
import img5 from "../assets/download 6.jpg";
import RevealOnScroll from "./RevealOnScroll";

const Partner = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <RevealOnScroll>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 sm:mb-12 md:mb-16 hover:cursor-pointer">
          Trusted Travel Partners
        </h1>
      </RevealOnScroll>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 mx-auto">
        <RevealOnScroll>
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-24 md:h-28 rounded-3xl hover:scale-110 transition-transform"
            src={img1}
            alt=""
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-24 md:h-28 rounded-3xl hover:scale-110 transition-transform"
            src={img2}
            alt=""
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-24 md:h-28 rounded-3xl hover:scale-110 transition-transform"
            src={img3}
            alt=""
          />
        </RevealOnScroll>
        <RevealOnScroll>
          {" "}
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-24 md:h-28 rounded-3xl hover:scale-110 transition-transform"
            src={img4}
            alt=""
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-24 md:h-28 rounded-3xl hover:scale-110 transition-transform"
            src={img5}
            alt=""
          />
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Partner;
