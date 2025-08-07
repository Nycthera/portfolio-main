// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import SolarSystemSpinner from "./components/SolarSystemSpinner"; // Import the solar system spinner


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetch data, load images, etc.)
    const timer = setTimeout(() => setLoading(false), 3300); // Set loading state to false after 1.5 seconds
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        
      <div className="h-screen flex items-center justify-center">  <SolarSystemSpinner /> </div>// Show solar system spinner while loading
      ) : (
        <div className="flex">
          <Sidebar /> {/* Sidebar available across all pages */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Works />} />
              
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

console.warn("Made by Chris Liu with ❤️, 2024-25");
console.log("Credits: \nDesign: Chris Liu\nIcons: React Icons\nFox picture: Google Images\nIf you have any questions, my email: notexttospeachfmsp@gmail.com")
export default App;
