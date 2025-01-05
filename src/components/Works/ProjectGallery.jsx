import React from "react";

const projects = [
  {
    title: "Face Recognition Script",
    description: "A Python script that recognizes faces in images and videos.",
    techStack: ["Python", "OpenCV", "Dlib"],
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/face-reco",  // Link to the GitHub repository
  },
  {
    title: "Countdown website from 2024 to 2025",
    description: "A website that counts down the days, hours, minutes, and seconds to the New Year.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://countdown-one-iota.vercel.app/",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/countdown",  // Link to the GitHub repository
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data and elegant design.",
    techStack: ["React", "OpenWeather API", "CSS"],
    projectLink: "https://weather-app-one-gamma-78.vercel.app",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/weather-app",  // Link to the GitHub repository
  },
  {
    title: "Mobile note-taking app",
    description: "A mobile note-taking app that allows users to create, edit, and delete notes. (Note: this project is kinda broken)",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/react-native-note-app",  // Link to the GitHub repository
  },
  {
    title: "portfolio version 3.2",
    description: "A personal portfolio built with React and Tailwind CSS. (Note: this portfolio is built based of it)",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://portfolio-ver-3-2.vercel.app/",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/portfolio-ver-3.2"
  },
  {
    title: "AI Chatbot website",
    description: "A website with an AI chatbot that answers questions and provides information. (Note: this project is kinda broken and is not deployed yet)",
    techStack: ["React", "Node.js", "Gemini API", "Tailwind CSS", "JavaScript"],
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/react-gemini"
  },
  {
    title: "Gradient colour picker",
    description: "A website that allows the user to pick a gradient colour (Note: this project is not deployed yet)",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // Link to the deployed project
    repoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Task manger website",
    description: "A website that allows the user to create, edit, and delete tasks",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://taskmanger-opal.vercel.app/",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/taskmanger"
  },
  {
    title: "A webpage talking about the effects of textile waste",
    description: "A website that talks about the effects of textile waste I made for a school project",
    techStack: ["React", "Taiwind CSS", "JavaScript"],
    projectLink: "https://textile-waste.vercel.app/",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/textile-waste"
  },
  {
    title: "A webpage that when a image is uploaded, it will add 1 point to the score",
    description: "A website that when a image is uploaded, it will add 1 point to the score (Note: my classmate asked for this project)",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    projectLink: "https://imager-orcin.vercel.app/",  // Link to the deployed project
    repoLink: "https://github.com/dabby12/imager"
  }
];

const ProjectGallery = () => {
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
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors duration-300 text-sm"
              >
                View Project
              </a>
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

      {/* Button to navigate to GitHub or Website */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/dabby12" // Replace with your actual GitHub link
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
