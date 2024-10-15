import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className="flex justify-between fixed top-5 w-full items-center px-4 md:h-20 h-16 z-50 bg-white opacity-85 rounded-full">
        <div className="flex items-center gap-5">
          <img
            className="md:w-24 md:h-16 w-16 h-10 rounded-full hover:cursor-pointer"
            src={logo}
            alt="Wanderlust Logo"
          />
          <h1 className="font-bold text-stone-700 md:text-xl text-md hover:cursor-pointer">
            Wanderer
          </h1>
        </div>

        <ul className="hidden md:flex items-center text-xl text-stone-600 gap-10 hover:rounded-lg hover:cursor-pointer">
          <li>Book</li>
          <li>Explore</li>
          <li>Discover</li>
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl pr-3 text-stone-800">
            {isMenuOpen ? (
              <IoIosClose className="text-4xl" />
            ) : (
              <RxHamburgerMenu />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <button className="rounded-full bg-blue-500 text-white font-bold text-lg h-16 px-6 hover:cursor-pointer hover:opacity-75">
            Get Started
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[5.3rem]  z-50 w-full bg-white opacity-90 rounded-3xl mt-2  px-6 py-6 ">
          <ul className="flex flex-col gap-6 text-stone-600 text-lg">
            <li className="hover:cursor-pointer">Book</li>
            <li className="hover:cursor-pointer">Explore</li>
            <li className="hover:cursor-pointer">Discover</li>
          </ul>
          <div className="flex justify-start  mt-6">
            <button className="rounded-full bg-blue-500 text-white font-bold text-lg h-14 px-6 hover:cursor-pointer hover:bg-blue-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
