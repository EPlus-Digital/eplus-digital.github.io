import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Link
      to={link}
      className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4">
        {Icon && <Icon className="text-white" size={28} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
