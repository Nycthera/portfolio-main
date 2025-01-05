import React from "react";

const HeroImage = () => {
  return (
    <div className="hidden lg:block w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
      <img
        src="https://placehold.co/600x400"
        alt="Your Name"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

console.error("Image: Ian.png cannot be rendered in due to 4.7Gb of file size. Error code: 402");

export default HeroImage;
