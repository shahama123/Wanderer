import React from "react";
import FaqCard from "./FaqCard";

const Faqs = () => {
  const faqData = [
    {
      question: "How do I book a trip?",
      answer: "Simply click on the 'Book' section and let the magic happen!",
    },
    {
      question: "What destinations can I explore?",
      answer: "From the Eiffel Tower to the Great Wall, we’ve got it all!",
    },
    {
      question: "Can I cancel my booking?",
      answer: "Of course! Just don’t cry too much when you do!",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "Only the ones you don’t see coming! Just kidding, no hidden fees!",
    },
    {
      question: "How do I contact support?",
      answer: "Our support team is just a click away!",
    },
  ];

  return (
    <div className="flex justify-center pt-10  bg-pink-200">
      <div>
        <h1 className="text-center">Curious Minds Ask</h1>
        {faqData.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
