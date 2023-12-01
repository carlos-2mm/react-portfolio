import React from "react";

function About() {
  return (
    <section id="about">
      <div className="pic-container">
      <img className="about-pic" src="/src/assets/img/Carlos-Macias.jpg" alt="Carlos Macias" />
      </div>
      <div>
      <div className="about-txt">
      <p className="subtitle">Hello, I'm</p>
      <h2 className="title">Carlos Macias</h2>
      <p className="subtitle">Full-Stack Developer</p>
      </div>
      <div className="about-txt">
      <h3 className="subtitle">About Me</h3>
      <p className="txt-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        voluptates, quos, quae, quibusdam quia voluptas doloribus natus
        voluptatem quod voluptatibus quidem? Quam, quibusdam. Quisquam
        voluptatum, voluptate quia quibusdam quae quas?
      </p>
      </div>
      </div>
    </section>
  );
}

export default About;