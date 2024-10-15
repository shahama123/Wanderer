import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import RevealOnScroll from "./RevealOnScroll";

const Countup = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Count up only once when the component is in view
    threshold: 0.3, // The percentage of the component's visibility before triggering
  });

  return (
    <div className="px-4 py-20">
      <RevealOnScroll>
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20"
        >
          {inView && (
            <>
              <div className="text-center">
                <CountUp
                  className="text-blue-700 text-5xl md:text-8xl font-bold"
                  start={999900}
                  end={1000000}
                  duration={5}
                  separator=","
                  suffix="+"
                />
                <p className="text-lg md:text-2xl">Happy Travelers</p>
              </div>
              <div className="text-center">
                <CountUp
                  className="text-blue-700 text-5xl md:text-8xl font-bold"
                  start={400}
                  end={500}
                  duration={5}
                  separator=","
                  suffix="+"
                />
                <p className="text-lg md:text-2xl">Destinations Worldwide</p>
              </div>
              <div className="text-center">
                <h1 className="text-blue-700 text-5xl md:text-8xl font-bold">
                  24/7
                </h1>
                <p className="text-lg md:text-2xl">Customer Support</p>
              </div>
            </>
          )}
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Countup;
