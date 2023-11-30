import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Proficiencies</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
              <h3>React</h3>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
              <h3>MySQL</h3>
              <h3>Node JS</h3>
              <h3>Express JS</h3>
              <h3>MongoDB</h3>
              <h3>Webpack</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>
            Resume
        </h2>
        <a href="./public/Carlos-Macias-Resume.pdf" download="Carlos-Macias-Resume.pdf">Download Resume</a>

      </div>
    </section>
  );
}

export default Resume;
