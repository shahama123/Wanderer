import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" border rounded-2xl w-[190vh] mt-5 px-3 py-8 bg-white">
        <div className="flex justify-between">
          <h2 onClick={toggleFaq}>{question}</h2>
          <RiArrowDropDownLine onClick={toggleFaq} />
        </div>

        {isOpen && <p>{answer}</p>}
      </div>
    </>
  );
};

export default FaqCard;
