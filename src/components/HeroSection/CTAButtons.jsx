import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import LearnMoreButton from "../SpecialComponents/LearnMore";
import ContactMe from "../SpecialComponents/ContactMe";

const CTAButtons = () => {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Buttons Wrapper */}
      <div className="flex space-x-4 items-center">
        {/* LearnMoreButton wrapped with Link to redirect to About page */}
        <Link to="/about">
          <LearnMoreButton />
        </Link>

      </div>
    </div>
  );
};

export default CTAButtons;
