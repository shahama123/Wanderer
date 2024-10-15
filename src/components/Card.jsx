import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Card = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <RevealOnScroll>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center hover:cursor-pointer">
          Adventure Awaits
        </h1>
      </RevealOnScroll>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-screen-lg w-full">
          {["Explorer", "Adventurer", "Globetrotter", "Voyager"].map(
            (plan, index) => (
              <div
                key={index}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs flex flex-col"
              >
                <div className="bg-blue-600 text-center text-white font-bold text-2xl rounded-t-3xl px-3 py-4 sm:px-4 sm:py-5">
                  <RevealOnScroll>
                    <h1>{plan}</h1>
                  </RevealOnScroll>
                  <RevealOnScroll>
                    <h2 className="text-lg font-normal">
                      <span className="text-2xl">
                        {index === 0
                          ? "$4.99"
                          : index === 1
                          ? "$9.99"
                          : index === 2
                          ? "$14.99"
                          : "$19.99"}
                      </span>{" "}
                      / per month
                    </h2>
                  </RevealOnScroll>
                </div>
                <div className="bg-white text-center rounded-b-3xl py-8 px-4 sm:px-6 md:px-8 flex flex-col flex-grow">
                  <RevealOnScroll>
                    <p className="text-base mb-16 sm:text-lg md:text-xl">
                      {index === 0
                        ? "Perfect for weekend warriors looking for quick getaways!"
                        : index === 1
                        ? "For those who crave more adventures and less planning!"
                        : index === 2
                        ? "Ideal for the serious traveler with a passion for exploration!"
                        : "For the ultimate travel junkie who needs it all!"}
                    </p>
                  </RevealOnScroll>
                  <div className="flex justify-center mt-auto ">
                    <RevealOnScroll>
                      <button className="border rounded-full py-2 px-6 sm:py-2 sm:px-8 text-white font-bold hover:bg-blue-700 bg-blue-500">
                        <p>Start</p>
                        <p>Exploring</p>
                      </button>
                    </RevealOnScroll>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
