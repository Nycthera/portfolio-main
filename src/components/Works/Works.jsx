import React from "react";
import ProjectGallery from "./ProjectGallery";

const Works = () => {
  return (
    <div className="ml-64 min-h-screen p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        My Works
      </h1>
      <ProjectGallery />
    </div>
  );
};

export default Works;
