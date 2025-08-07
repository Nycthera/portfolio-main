// src/components/Works/ProjectCard.jsx
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, liveLink, repoLink }) => {
  return (
    <div className="project-card bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-lg">{description}</p>
      <div className="mt-4">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-400 hover:text-blue-600">
          View Live
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};



export default ProjectCard;

