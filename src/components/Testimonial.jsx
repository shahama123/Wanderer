import React from "react";
import img1 from "../assets/person1.jpeg";
import img2 from "../assets/person2.jpeg";
import img3 from "../assets/person3.jpeg";
import img4 from "../assets/person4.jpeg";
import img5 from "../assets/person5.jpeg";
import img6 from "../assets/person6.jpeg";
import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  { img: img1, text: "This site made my trip unforgettable!" },
  { img: img2, text: "Booking was a breeze, and the views? Wow!" },
  { img: img3, text: "I found places I never knew existed!" },
  { img: img4, text: "Best travel experience ever, hands down!" },
  { img: img5, text: "I’ll never book travel anywhere else!" },
  { img: img6, text: "This is the future of travel booking!" },
];

const Testimonial = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-16">
      <RevealOnScroll>
        <div>
          {" "}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold mb-10">
            Cheers!
          </h1>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ img, text }, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-16 sm:w-20 rounded-full hover:scale-125 transition-transform"
                src={img}
                alt={`Testimonial ${index + 1}`}
              />
              <p className="text-center mt-4">{text}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Testimonial;
