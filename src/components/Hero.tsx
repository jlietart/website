import React from "react";
import { CalendlyButton } from "@/components/CalendlyButton";
import RotatingWords from "./RotatingWords";

const Hero = () => {
  return (
    <div className="text-center mx-auto border-b border-gray-700 w-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        👋 Hi, I&apos;m Julien, I help businesses to <br />
        <span className="inline-flex items-center">
          <RotatingWords
            words={[
              "use AI to boost their productivity",
              "adopt and leverage emerging technologies",
              "optimize and enhance their codebase",
              "automate and streamline their processes",
              "scale and future-proof their applications",
            ]}
          />
        </span>
        <br />
        &nbsp;to achieve exceptional results
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <i className="devicon-html5-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-css3-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-typescript-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-javascript-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-nodejs-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-python-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-react-original colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-graphql-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-nestjs-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
        <i className="devicon-tailwindcss-plain colored text-5xl sm:text-6xl hover:scale-110 transition-transform duration-300"></i>
      </div>
      <div className="my-12 flex justify-center">
        <CalendlyButton url="https://calendly.com/julien-lietart/30min" />
      </div>
    </div>
  );
};

export default Hero;
