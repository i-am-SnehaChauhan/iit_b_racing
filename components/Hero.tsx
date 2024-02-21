"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  
  // const words2 = [
  //   {
  //     text: "IIT",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  //   {
  //     text:"Bombay",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  //   {
  //     text: "Racing.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-[#00004D]">Welcome to the IIT Bombay Racing</h1>
        {/* <TypewriterEffectSmooth words={words2} /> */}
        <p className="hero__subtitle">
          Join us in our journey to build the fastest electric car in India
        </p>

        <CustomButton
          title="Read More"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
