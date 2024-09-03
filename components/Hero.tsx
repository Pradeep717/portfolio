import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { profile } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-14">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-wide text-xs text-center text-blue-100 max-w-80 my-4">
            Hi, I&apos;m Pradeep
          </h2> */}
          <h2 className="uppercase tracking-wide md:text-5xl text-4xl text-center text-blue-100 max-w-200 my-4">
            Hi, I&apos;m <span className="text-purple">Pradeep</span>
          </h2>

          <div className="relative flex items-center justify-center">
            {/* <div className="lg:justify-center z-[-1] lg:z-0 lg:opacity-100 opacity-50 lg:items-center absolute top-[-10vw] right-0 lg:flex lg:static">
              <img src={profile.svg} alt="Hero Circles" width={250} height={250} />
            </div> */}
            <div className="rounded-full bg-[#181818] w-500 h-400 relative z-10">
              <img
                src={profile.img}
                alt="My Profile Picture"
                className="rounded-full"
                width={200}
                height={200}
              />
            </div>
          </div>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Pradeep, a full-stack developer passionate about
            creating web applications. I&apos;m a final-year Electrical and
            Information Engineering student with 8 months of experience as a
            Trainee Software Developer. I have skills in JavaScript, Python,
            PHP, Node.js, React, Docker, Kubernetes, MySQL, MongoDB, and AWS.
          </p>

          <a href="#about">
            <MagicButton
              title="show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
