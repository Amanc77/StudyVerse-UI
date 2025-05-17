import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 bg-white mx-2 sm:mx-4 md:mx-6">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center w-full">
        <span className="text-purple-600 font-bold text-base sm:text-lg">
          StudyVerse
        </span>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 w-full">
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition text-sm sm:text-base py-1 sm:py-0"
          >
            Study Rooms
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition text-sm sm:text-base py-1 sm:py-0"
          >
            Find Buddies
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition text-sm sm:text-base py-1 sm:py-0"
          >
            Study Tools
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition text-sm sm:text-base py-1 sm:py-0"
          >
            Login / Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
