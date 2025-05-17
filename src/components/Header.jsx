import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 sm:p-4 bg-white shadow-md rounded-lg mx-2 sm:mx-4 md:mx-6 mt-4">
      <div className="flex items-center bg-white p-2 sm:p-3 rounded-lg shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3"
        />
        <div>
          <h1 className="text-base sm:text-lg font-bold text-gray-800">
            MANAV AGHERA
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">00:23</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:space-x-3">
        <button className="text-gray-600 text-base sm:text-lg">👍</button>
        <button className="text-gray-600 text-base sm:text-lg">😂</button>
        <button className="text-gray-600 text-base sm:text-lg">😊</button>
        <button className="text-gray-600 text-base sm:text-lg">📝</button>
        <button className="text-gray-600 text-base sm:text-lg">↩️</button>
        <button className="text-gray-600 text-base sm:text-lg">⋮</button>
      </div>
    </div>
  );
}

export default Header;
