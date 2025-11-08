import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100">
      <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-white text-4xl font-bold">{title.charAt(0)}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
          >
            View Case Study
            <FiExternalLink className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
