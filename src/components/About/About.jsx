import React from "react";

import Introduction from "./Introduction";

import Skills from "./Skills";

const About = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-64 h-full bg-gray-800 text-white p-5 top-0 left-0 z-10 transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0">
        {/* Sidebar content here */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 lg:p-16 overflow-auto">
        {/* Introduction Section */}
        <Introduction />

        

        {/* Skills Section */}
        <Skills />

      </div>
    </div>
  );
};

export default About;
  