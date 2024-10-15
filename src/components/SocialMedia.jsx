import React from "react";
import RevealOnScroll from "./RevealOnScroll";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="py-20 px-4">
      <RevealOnScroll>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold hover:cursor-pointer mb-8">
            Join Our Adventure Crew!
          </h1>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="rounded-full text-deep-purple-900 text-2xl sm:text-3xl md:text-4xl hover:scale-110 bg-blue-gray-50 p-3">
            <FaFacebookF />
          </div>
          <div className="rounded-full text-deep-purple-900 text-2xl sm:text-3xl md:text-4xl hover:scale-110 bg-blue-gray-50 p-3">
            <FaTwitter />
          </div>
          <div className="rounded-full text-deep-purple-900 text-2xl sm:text-3xl md:text-4xl hover:scale-110 bg-blue-gray-50 p-3">
            <FaInstagram />
          </div>
          <div className="rounded-full text-deep-purple-900 text-2xl sm:text-3xl md:text-4xl hover:scale-110 bg-blue-gray-50 p-3">
            <FaLinkedinIn />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default SocialMedia;
