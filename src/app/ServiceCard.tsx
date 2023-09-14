import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="mb-4">{icon}</div>
      <img src={image} alt={title} className="mb-4 w-24 h-24 mx-auto" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;
