import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <p className="subtitle">Explore My</p>
      <h1 className="title">Proficiencies</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-subtitle">Frontend Development</h2>
            <div className="development-container">
              <h3 className='devs'>HTML</h3>
              <h3 className='devs'>CSS</h3>
              <h3 className='devs'>JavaScript</h3>
              <h3 className='devs'>React</h3>
              <h3 className='devs'>Bootstrap</h3>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-subtitle">Backend Development</h2>
            <div className="development-container">
              <h3 className='devs'>MySQL</h3>
              <h3 className='devs'>Node JS</h3>
              <h3 className='devs'>Express JS</h3>
              <h3 className='devs'>MongoDB</h3>
              <h3 className='devs'>Webpack</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>
            Resume
        </h2>
        <a href="./assets/docs/resume.pdf" download="Carlos-Macias-Resume.pdf">Download Resume</a>

      </div>
    </section>
  );
}

export default Resume;
