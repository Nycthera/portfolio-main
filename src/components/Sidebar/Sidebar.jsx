import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { english: "Home", chinese: "主页", link: "/" },
  { english: "About", chinese: "关于", link: "/about" },
  { english: "Projects", chinese: "项目", link: "/projects" },
  { english: "Contact", chinese: "联系", link: "/contact" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-full bg-gray-800 text-white fixed top-0 left-0 z-10 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 right-[-12px] transform bg-purple-500 text-white p-1 rounded-full focus:outline-none hover:bg-purple-700 transition-transform duration-300 ${
          isCollapsed ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isCollapsed ? "→" : "←"}
      </button>

      {/* Menu Items */}
      <ul className="space-y-4 p-5">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            english={item.english}
            chinese={item.chinese}
            link={item.link}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ english, chinese, link, isCollapsed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={link}
        className="flex items-center space-x-2 text-lg p-2 rounded-md hover:bg-gray-700 transition-all duration-300"
      >
        {/* English text */}
        {!isCollapsed && <span className="text-xl">{english}</span>}

        {/* Icon or placeholder */}
        {isCollapsed && (
          <span
            className={`text-3xl ${
              isHovered ? "opacity-100" : "opacity-50"
            } transition-opacity duration-300`}
          >
            {chinese}
          </span>
        )}
      </Link>
    </li>
  );
};

export default Sidebar;
