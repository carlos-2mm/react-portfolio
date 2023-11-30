import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "TravIs",
      image: "path_to_image",
      link: "https://travis231017-9762a24c277b.herokuapp.com/",
      repo: "https://github.com/UofTTeam2/TravIS",
    },
    {
      title: "Cine Search",
      image: "path_to_image",
      link: "https://team-ccmy.github.io/Cine-Search/",
      repo: "https://github.com/Team-ccmy/Cine-Search",
    },
    {
      title: "Text Editor",
      image: "path_to_image",
      link: "https://jate-txt-edit-4d9b48ee6fe7.herokuapp.com/",
      repo: "https://github.com/carlos-2mm/text-editor",
    },
    {
      title: "Social Network API",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/social-network-API",
    },
    {
      title: "E-Commerce Backend",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/e-commerce-backend",
    },
    {
      title: "Employee Tracker",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/employee-tracker",
    },
    {
      title: "Note Taker",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/note-taker",
    },
    {
      title: "SVG Logo Maker",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/svg-logo-maker",
    },
    {
      title: "README Generator",
      image: "path_to_image",
      link: "project_link",
      repo: "https://github.com/carlos-2mm/readme-generator",
    },
    {
      title: "Weather Dashboard",
      image: "path_to_image",
      link: "https://carlos-2mm.github.io/weather-forecast-app/",
      repo: "https://github.com/carlos-2mm/weather-forecast-app",
    },
    {
      title: "Daily Agenda Assistant",
      image: "path_to_image",
      link: "https://carlos-2mm.github.io/daily-agenda-assistant/",
      repo: "https://github.com/carlos-2mm/daily-agenda-assistant",
    },
    {
      title: "JavaScript Quiz",
      image: "path_to_image",
      link: "https://carlos-2mm.github.io/js-fundamentals-quiz/",
      repo: "https://github.com/carlos-2mm/js-fundamentals-quiz",
    },
    {
      title: "Password Generator",
      image: "path_to_image",
      link: "https://carlos-2mm.github.io/safe-password-creator/",
      repo: "https://github.com/carlos-2mm/safe-password-creator",
    },
    {
      title: "Personal Portfolio",
      image: "path_to_image",
      link: "project_link",
      repo: "github_repo_link",
    },
    {
      title: "Horiseon",
      image: "./public/img/Horiseon.png",
      link: "https://carlos-2mm.github.io/horiseon-online-specialist/t_link",
      repo: "https://github.com/carlos-2mm/horiseon-online-specialist",
    },
  ];

  return (
    <section id="projects">
      <p className="subtitle">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <div className="containers">
          {projects.map((project, index) => (
          <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
