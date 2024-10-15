import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Contact = () => {
  return (
    <div className="bg-pink-50 py-24 px-4 sm:px-6 md:px-8 lg:px-16">
      <RevealOnScroll>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 hover:cursor-pointer">
            Get in Touch Now!
          </h1>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-4">
            <input
              className="rounded-full w-full sm:w-96 px-5 py-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="rounded-full w-full sm:w-96 px-5 py-4"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              className="rounded-full w-full sm:w-[49rem] px-7 py-4"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="flex justify-center mb-8">
            <textarea
              className="rounded-full w-full sm:w-[49rem] px-7 py-4"
              placeholder="Message"
            />
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-xl text-white rounded-full px-7 py-4 hover:bg-blue-700">
            Send It!
          </button>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Contact;
