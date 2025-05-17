import React from "react";

function StudyToolCard({ title, description, children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default StudyToolCard;
