import React from "react";

function StudyBuddyCard({ name, description, tags, avatar }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center space-x-3 sm:space-x-4">
      <img
        src={avatar}
        alt="Profile"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
      />
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap space-x-1 sm:space-x-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base">
        Message
      </button>
    </div>
  );
}

export default StudyBuddyCard;
