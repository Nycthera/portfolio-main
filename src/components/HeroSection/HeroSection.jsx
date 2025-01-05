import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import CTAButtons from "./CTAButtons";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center p-8 lg:p-16 h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Animated Pulsing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse-slow blur-2xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 animate-pulse-fast blur-3xl -z-10"></div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:pl-64">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg">
          <HeroText />
        </div>

        {/* Center Section */}
        <div className="flex flex-col justify-center items-center w-full">
          <CTAButtons />
        </div>

        {/* Right Section */}
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
