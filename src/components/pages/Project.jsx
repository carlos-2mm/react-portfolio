import React from 'react';

function Project({ title, image, link, repo }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={link}>View App</a>
      <a href={repo}>GitHub Repo</a>
    </div>
  );
}

export default Project;
