"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";
import aboutGdsc from "../public/TeamImage.jpg";

const Team = () => {
  const Join = () => {};

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center bg-[#fff] from-primary to-secondary bg-cover overflow-hidden text-white relative">
        <div className="flex-1 mx-3 md:mx-7 my-14 py-10 px-6 md:px-16 max-w-7xl bg-opacity-70 bg-[#00004D] backdrop-blur-md rounded-lg md:ml-20 md:my-14">
            <div className="grid md:grid-cols-2 gap-4 items-start">
             <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">The Team</h1>
            <h2 className="text-lg md:text-xl font-bold mb-4">
              "Driving Innovation, Powering Sustainability: IITB Racing"
            </h2>
            <p className="text-sm md:text-base mb-6">
              IIT Bombay Racing is India's premier Formula Student Electric team
              with a vision to "Revolutionize Electric Mobility in India
              focusing on sustainable technologies and innovations". IIT Bombay
              Racing stands at the forefront of India's Formula Student Electric
              teams, driven by an unwavering vision to spearhead a
              transformative shift in the landscape of electric mobility.
              Through relentless dedication and a passion for excellence, we are
              committed to propelling India into the global forefront of
              sustainable electric mobility solutions.
            </p>
            <CustomButton
              title="Know More"
              containerStyle="bg-primary-blue text-white rounded-full mt-10"
              handleClick={Join}
            />
          </div>
          <div className="flex items-center justify-center md:justify-end">
            
                <Image
                    src={aboutGdsc}
                    alt="team"
                    className="rounded-lg"
                    width={500}
                    height={500}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
