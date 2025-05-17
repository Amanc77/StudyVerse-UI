import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudyRooms from "./components/StudyRooms";
import FindBuddies from "./components/FindBuddies";
import StudyTools from "./components/StudyTools";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <StudyRooms />
      <FindBuddies />
      <StudyTools />
    </div>
  );
}

export default App;
