import React from "react";
import StudyToolCard from "./StudyToolCard.jsx";

function StudyTools() {
  return (
    <div className="p-3 sm:p-4 md:p-6 mx-2 sm:mx-4 md:mx-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
        Study Tools
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        Enhance your sessions with our collection of productivity tools
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <StudyToolCard
          title="Pomodoro Timer"
          description="Manage your study time with Pomodoro technique"
        >
          <div className="flex justify-center items-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600">
              25:00
            </div>
          </div>
        </StudyToolCard>
        <StudyToolCard
          title="Focus Journal"
          description="Track your study progress and manage your goals"
        >
          <button className="w-full px-3 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base">
            Open Journal
          </button>
        </StudyToolCard>
      </div>
    </div>
  );
}

export default StudyTools;
