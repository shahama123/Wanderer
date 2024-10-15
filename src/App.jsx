import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";

import AccordionCustomIcon from "./components/Accordion";
import Partner from "./components/Partner";
import Card from "./components/Card";
import CheckIcon from "./components/Card";
import Booking from "./components/Booking";
import MovingText from "./components/MovingText";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import ImageCard from "./components/ImageCard";

import Countup from "./components/CountUp";
import Travel from "./components/Travel";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import FixedBg from "./components/FixedBg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AccordionCustomIcon />
      <Partner />
      <CheckIcon />
      <Booking />
      <MovingText />
      <FixedBg />
      <Testimonial />
      <Travel />
      <Countup />
      <ImageCard />
      <SocialMedia />
      <Contact />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
