import React, { useState } from "react";

const projects = [
  {
    title: "Face Recognition Script",
    description: "A Python script that recognizes faces in images and videos.",
    techStack: ["Python", "OpenCV", "Dlib"],
    projectLink: "", // Link to the deployed project
    repoLink: "https://github.com/dabby12/face-reco", // Link to the GitHub repository
  },
  {
    title: "Countdown website from 2024 to 2025",
    description:
      "A website that counts down the days, hours, minutes, and seconds to the New Year.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://countdown-one-iota.vercel.app/", // Link to the deployed project
    repoLink: "https://github.com/dabby12/countdown", // Link to the GitHub repository
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data and elegant design.",
    techStack: ["React", "OpenWeather API", "CSS"],
    projectLink: "https://weather-app-one-gamma-78.vercel.app", // Link to the deployed project
    repoLink: "https://github.com/dabby12/weather-app", // Link to the GitHub repository
  },
  {
    title: "Mobile note-taking app",
    description:
      "A mobile note-taking app that allows users to create, edit, and delete notes. ",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    projectLink: "", // Link to the deployed project
    repoLink: "https://github.com/dabby12/react-native-note-app", // Link to the GitHub repository
  },
  {
    title: "Portfolio version 3.2",
    description: "A personal portfolio built with React and Tailwind CSS. ",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://portfolio-ver-3-2.vercel.app/", // Link to the deployed project
    repoLink: "https://github.com/dabby12/portfolio-ver-3.2",
  },
  {
    title: "AI Chatbot website",
    description:
      "A website with an AI chatbot that answers questions and provides information. ",
    techStack: ["React", "Node.js", "Gemini API", "Tailwind CSS", "JavaScript"],
    projectLink: "", // Link to the deployed project
    repoLink: "https://github.com/dabby12/react-gemini",
  },
  {
    title: "Gradient colour picker",
    description:
      "A website that allows the user to pick a gradient colour ",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "", // Link to the deployed project
    repoLink: "https://github.com/dabby12/gradient-colour",
  },
  {
    title: "Task manager website",
    description: "A website that allows the user to create, edit, and delete tasks",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://taskmanger-opal.vercel.app/", // Link to the deployed project
    repoLink: "https://github.com/dabby12/taskmanger",
  },
  {
    title: "Textile waste website",
    description: "A website that talks about the effects of textile waste I made for a school project",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://textile-waste.vercel.app/", // Link to the deployed project
    repoLink: "https://github.com/dabby12/textile-waste",
  },
  {
    title: "Custom project made for my classmate",
    description:
      "A website that when a image is uploaded, it will add 1 point to the score (Note: my classmate asked for this project)",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://imager-orcin.vercel.app/", // Link to the deployed project
    repoLink: "https://github.com/dabby12/imager",
  },
];

const ProjectGallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleViewProjectClick = (projectLink) => {
    if (!projectLink) {
      setPopupMessage("This project is not deployed yet.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-xl shadow-lg">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2 text-purple-600">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-purple-600 font-semibold mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project and Repository Links */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleViewProjectClick(project.projectLink)}
                className="text-purple-600 hover:text-purple-800 transition-colors duration-300 text-sm"
              >
                View Project
              </button>
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors duration-300 text-sm"
                >
                  View Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-800 mb-4">{popupMessage}</p>
            <button
              onClick={closePopup}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Button to navigate to GitHub or Website */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/dabby12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          View My GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectGallery;
