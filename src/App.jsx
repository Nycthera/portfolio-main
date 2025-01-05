// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar"; // Keep the Sidebar


import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works"
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar available across all pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element ={<Works />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
console.warn("This website is an example and shouldnt be taken real ")
export default App;
