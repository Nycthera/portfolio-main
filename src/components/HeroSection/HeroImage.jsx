import React from "react";
import FoxImage from "../../assets/fox-image.jpg";

const HeroImage = () => {
  return (
    <div className="hidden lg:block w-128 h-64 lg:w-128 lg:h-64 rounded-full overflow-hidden shadow-lg">
  <img
    src={FoxImage}  // Make sure 'FoxImage' is properly imported or available in your code
    alt="Fox Hero"
    className="w-full h-full object-cover"
  />
</div>

  );
};

export default HeroImage;
