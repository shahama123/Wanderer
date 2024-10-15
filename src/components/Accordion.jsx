import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full   py-20 px-4 sm:px-6 md:px-8 bg-pink-50">
      <RevealOnScroll>
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-6 sm:mb-8 md:mb-10 hover:cursor-pointer">
          Curious Minds Ask
        </h1>
      </RevealOnScroll>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <RevealOnScroll>
          <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 mb-3">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal"
                onClick={() => handleOpen(1)}
              >
                How do I book a trip?
              </AccordionHeader>
              <AccordionBody className="text-black text-sm sm:text-base md:text-lg">
                Simply click on the 'Book' section and let the magic happen!
              </AccordionBody>
            </Accordion>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 mb-3">
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal"
                onClick={() => handleOpen(2)}
              >
                What destinations can I explore?
              </AccordionHeader>
              <AccordionBody className="text-black text-sm sm:text-base md:text-lg">
                From the Eiffel Tower to the Great Wall, we’ve got it all!
              </AccordionBody>
            </Accordion>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 mb-3">
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal"
                onClick={() => handleOpen(3)}
              >
                Can I cancel my booking?
              </AccordionHeader>
              <AccordionBody className="text-black text-sm sm:text-base md:text-lg">
                Of course! Just don’t cry too much when you do!
              </AccordionBody>
            </Accordion>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 mb-3">
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal"
                onClick={() => handleOpen(4)}
              >
                Are there any hidden fees?
              </AccordionHeader>
              <AccordionBody className="text-black text-sm sm:text-base md:text-lg">
                Only the ones you don’t see coming! Just kidding, no hidden
                fees!
              </AccordionBody>
            </Accordion>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 mb-3">
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal"
                onClick={() => handleOpen(5)}
              >
                How do I contact support?
              </AccordionHeader>
              <AccordionBody className="text-black text-sm sm:text-base md:text-lg">
                Our support team is just a click away!
              </AccordionBody>
            </Accordion>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
