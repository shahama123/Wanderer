import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Footer = () => {
  return (
    <RevealOnScroll>
      <div className="bg-black py-10 px-8 flex flex-col items-center lg:flex-row lg:justify-between">
        <h1 className="text-gray-200 text-xl text-center lg:text-left hover:cursor-pointer">
          © 2024 Travel Adventures. All rights reserved.
        </h1>
        <ul className="flex gap-6 text-gray-200 text-xl mt-4 lg:mt-0">
          <li className="relative">
            <a className="hover:underline hover:cursor-pointer hover:text-gray-300">
              Privacy
            </a>
          </li>
          <li className="relative">
            <a className="hover:underline hover:cursor-pointer hover:text-gray-300">
              Terms
            </a>
          </li>
          <li className="relative">
            <a className="hover:underline hover:cursor-pointer hover:text-gray-300">
              Support
            </a>
          </li>
          <li className="relative">
            <a className="hover:underline hover:cursor-pointer hover:text-gray-300">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </RevealOnScroll>
  );
};

export default Footer;
