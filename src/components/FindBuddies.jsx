import React from "react";
import StudyBuddyCard from "./StudyBuddyCard.jsx";

function FindBuddies() {
  const buddies = [
    {
      name: "Alex Kim",
      description:
        "Physics student looking for someone to study quantum mechanics",
      tags: ["Physics", "Quantum", "Mechanics"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    },
    {
      name: "Sophia Rodriguez",
      description: "English major interested in discussing classic literature",
      tags: ["Literature", "English", "Novels"],
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    },
    {
      name: "Marcus Chen",
      description: "CS student and web developer looking for coding partners",
      tags: ["Coding", "Web Dev", "Javascript"],
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop",
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 mx-2 sm:mx-4 md:mx-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
        Find Buddies
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        Connect with others who share your interests and study needs
      </p>
      <div className="space-y-3 sm:space-y-4">
        {buddies.map((buddy, index) => (
          <StudyBuddyCard
            key={index}
            name={buddy.name}
            description={buddy.description}
            tags={buddy.tags}
            avatar={buddy.avatar}
          />
        ))}
        <button className="w-full px-3 sm:px-4 py-2 sm:py-2 bg-purple-500 text-white rounded-lg text-sm sm:text-base">
          Create Buddy Profile
        </button>
      </div>
    </div>
  );
}

export default FindBuddies;
