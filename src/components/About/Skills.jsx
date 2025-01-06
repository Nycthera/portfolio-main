import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaFigma, FaNpm, FaPython, FaVuejs } from "react-icons/fa"; // Importing icons
import { LuTerminal } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { Link } from "react-router-dom"; // Importing Link for navigation
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiAppwrite } from "react-icons/si";


const Skills = () => {
  return (
    <section className="skills mb-8 p-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-red-500 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">Skills & Expertise</h2>
      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <FaHtml5 className="icon text-orange-500 hover:text-orange-600" />
        <FaCss3Alt className="icon text-blue-500 hover:text-blue-600" />
        <FaJsSquare className="icon text-yellow-500 hover:text-yellow-600" />
        <FaReact className="icon text-cyan-500 hover:text-cyan-600" />
        <FaNodeJs className="icon text-green-500 hover:text-green-600" />
        <FaGithub className="icon text-gray-700 hover:text-gray-800" />
        <FaFigma className="icon text-pink-500 hover:text-pink-600" />
        <LuTerminal className="icon text-black hover:text-gray-900" />
        <FaNpm className="icon text-red-500 hover:text-red-600" />
        <VscVscode className="icon text-blue-500 hover:text-blue-600" />
        <FaPython className="icon text-grey-800 hover:text-grey-900" />
        <FaVuejs className="icon text-green-500 hover:text-green-600" />
        <RiNextjsFill className="icon text-black hover:text-gray-900" />
        <FaJava className="icon text-red-500 hover:text-red-600" />
        <SiAppwrite className="icon text-pink-600 hover:text-pink-700" />
        {/* Add Python logo */}
        <div className="icon flex justify-center items-center">
          
        </div>
      </div>
      {/* Button to navigate to Projects page */}
      <div className="flex justify-center">
        <Link
          to="/projects"
          className="text-lg bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          See My Projects
        </Link>
      </div>
    </section>
  );
};

export default Skills;
