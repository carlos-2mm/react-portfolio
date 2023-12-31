import React from 'react';

function Project({ title, image, link, repo }) {
  return (
    <div className="details-container">
    <div className="project-container">
      <img
        src={image}
        alt={title}
        className="project-img"
      />
    </div>
    <h2 className="project-title">{title}</h2>
    <div className="btn-container">
      <button
        className="btn btn-color-1"
        onClick={() => window.open(repo)}
      >
        Github
      </button>
      <button
        className="btn btn-color-2"
        onClick={() => window.open(link)}
      >
        Live Demo
      </button>
    </div>
  </div>
  );
}

export default Project;