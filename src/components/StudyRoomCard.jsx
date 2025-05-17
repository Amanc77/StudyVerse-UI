import React from "react";

function StudyRoomCard({ title, description, tags, members }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
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
      <div className="flex justify-between items-center mt-3 sm:mt-4">
        <span className="text-xs sm:text-sm text-gray-500">
          {members} online
        </span>
        <button className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base">
          Join Room
        </button>
      </div>
    </div>
  );
}

export default StudyRoomCard;
