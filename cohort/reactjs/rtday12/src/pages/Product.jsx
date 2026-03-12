import React from "react";

const projects = [
  {
    name: "L-Earn Platform",
    description: "Peer-to-peer learning platform for university students."
  },
  {
    name: "Energy Prediction Model",
    description: "Machine learning project to predict energy consumption."
  },
  {
    name: "AI Chatbot",
    description: "A chatbot built using NLP techniques."
  }
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;