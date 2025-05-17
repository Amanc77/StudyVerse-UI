import React, { useState } from "react";
import StudyRoomCard from "./StudyRoomCard.jsx";

function StudyRooms() {
  const [search, setSearch] = useState("");
  const rooms = [
    {
      title: "Physics Study Group",
      description: "Working through mechanics problems",
      tags: ["Physics", "Mechanics", "Quantum"],
      members: "8/10",
    },
    {
      title: "Literature Analysis",
      description: "Discussing classic novels and literary techniques",
      tags: ["Literature", "Novels", "Analysis"],
      members: "3/15",
    },
    {
      title: "Web Development",
      description: "Building websites and learning coding techniques",
      tags: ["Coding", "Web Dev", "Javascript"],
      members: "5/12",
    },
    {
      title: "Calculus Crash Course",
      description: "Tackling difficult calculus problems and concepts",
      tags: ["Math", "Calculus", "Derivatives"],
      members: "10/15",
    },
    {
      title: "Graphic Design Workshop",
      description: "Learning the basics of design techniques",
      tags: ["Design", "Graphics", "Art"],
      members: "7/10",
    },
  ];

  const filteredRooms = rooms.filter(
    (room) =>
      room.title.toLowerCase().includes(search.toLowerCase()) ||
      room.description.toLowerCase().includes(search.toLowerCase()) ||
      room.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 mx-2 sm:mx-4 md:mx-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
        Study Rooms
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
        Connect with others or create your own study space
      </p>
      <div className="mb-3 sm:mb-4">
        <input
          type="text"
          placeholder="Search by name, description or tags..."
          className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {[
          "All",
          "Science",
          "Humanities",
          "Technology",
          "Medicine",
          "Mathematics",
          "Art & Design",
        ].map((filter, index) => (
          <button
            key={index}
            className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded-lg text-gray-700 text-xs sm:text-sm"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {["Public Rooms", "Private Rooms", "My Rooms"].map((tab, index) => (
          <button
            key={index}
            className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded-lg text-gray-700 text-xs sm:text-sm"
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto px-3 sm:px-4 py-1 sm:py-2 bg-purple-500 text-white rounded-lg text-xs sm:text-sm">
          Create New Room
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredRooms.map((room, index) => (
          <StudyRoomCard
            key={index}
            title={room.title}
            description={room.description}
            tags={room.tags}
            members={room.members}
          />
        ))}
      </div>
    </div>
  );
}

export default StudyRooms;
