import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const ContactUs = () => {
  return (
    <div className="py-20 px-5 bg-pink-50">
      <RevealOnScroll>
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold hover:cursor-pointer">
            Contact Us
          </h1>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:gap-10">
          <div className="text-xl space-y-5 mt-16 ml-10 lg:w-1/2">
            <p>Phone: +1-800-555-TRIP</p>
            <p>Book Your Adventure:</p>
            <p>info@traveladventures.com</p>
            <p>Working Hours: Mon-Fri: 9am - 6pm,</p>
            <p>Sat: 10am - 4pm</p>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <iframe
              className="w-full rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24181.81303732514!2d-73.98148894177245!3d40.746040426181686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1724713444012!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default ContactUs;
