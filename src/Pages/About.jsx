import React from "react";
import Story from "../Pages/Story";
import TeamIntro from "./TeamIntro";
import MissionVisionValues from "../Components/MissionVisionValues"; // Correct import path

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}

     <Story />
     <TeamIntro />
     <MissionVisionValues />
     
    </div>
  );
};

export default About;