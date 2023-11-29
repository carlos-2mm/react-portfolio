import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    // Add your project details here
    // { title: 'Project 1', image: 'path_to_image', link: 'project_link', repo: 'github_repo_link' },
    // ...
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
