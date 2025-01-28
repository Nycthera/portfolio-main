import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaFigma, FaNpm, FaPython, FaVuejs } from "react-icons/fa"; // Importing icons
import { LuTerminal } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { Link } from "react-router-dom"; // Importing Link for navigation
import { RiNextjsFill } from "react-icons/ri";
import { FaCloudflare, FaUnity } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { TbBrandFirebase} from "react-icons/tb";
import {  } from "react-icons/fa";
const Skills = () => {
  return (
    <section className="skills mb-8 p-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-red-500 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">Skills & Expertise</h2>
      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <FaHtml5 className="icon text-orange-500 hover:text-orange-600" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              HTML
              </span>
          </a>
        </div>
       <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <FaCss3Alt className="icon text-blue-500 hover:text-blue-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CSS
              </span>
          </a>
        </div>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <DiJavascript className="icon text-yellow-500 hover:text-yellow-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          JavaScript
          </span>
          </a>
        </div>
      </div>
        
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact className="icon text-blue-500 hover:text-blue-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          React
          </span>
          </a>
        </div>
      </div>  
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <FaNodeJs className="icon text-green-500 hover:text-green-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Node.js
          </span>
          </a>
        </div>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon text-black hover:text-gray-900" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          GitHub
          </span>
          </a>
        </div>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          <FaFigma className="icon text-pink-500 hover:text-pink-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Figma
          </span>
          </a>
        </div>
      </div>
      <div className="relative group">
          <a href="https://learn.microsoft.com/en-us/windows/terminal/" target="_blank" rel="noopener noreferrer">
          <LuTerminal className="icon text-black hover:text-gray-900" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Terminal
          </span>
          </a>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          <FaNpm className="icon text-red-500 hover:text-red-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          NPM
          </span>
          </a>
        </div>
      </div>
      <div className="relative group">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
        <VscVscode className="icon text-blue-500 hover:text-blue-600" />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          VSCode
        </span>
        </a>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <FaPython className="icon text-yellow-500 hover:text-yellow-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Python
          </span>
          </a>
        </div>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
          <FaVuejs className="icon text-green-500 hover:text-green-600" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Vue.js
          </span>
          </a>
        </div>
      </div>
      <div classname="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
        <div className="relative group">
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <RiNextjsFill className="icon text-black hover:text-gray-900" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Next.js
          </span>
          </a>
        </div>
      </div>
      <div className="relative group">
        <a href="https://www.cloudflare.com/en-gb/" target="_blank" rel="noopener noreferrer">
        <FaCloudflare className="icon text-cloudflare hover:text-cloudflare" />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Cloudfare
        </span>
        </a>
      </div>
      <div className="relative group">
        <a href="https://firebase.google.com/"  target="_blank" rel="noopener noreferrer">
       <TbBrandFirebase className="icon text-yellow-500 hover:text-yellow-600" />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Firebase
        </span>
        </a>
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
