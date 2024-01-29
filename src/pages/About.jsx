import React from "react";
// import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoJquery, BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaBriefcase, FaUniversity } from 'react-icons/fa';
import resume from "../assets/docs/Resume.pdf";

const About = () => {
  return (
    <>
    <header className="about-header">
        <h1>About Me</h1>
      </header>
    <div className="about-container">
      <div className="content">
      <div className="personal-info-section">
        <h2 className="subtitle-txt">Personal Info</h2>
        <p>First Name: <span>Carlos</span></p>
        <p>Last Name: <span>Macias</span></p>
        <p>Age: <span>36</span></p>
        <p>Based on: <span>Toronto</span></p>
        <p>Phone: <span>+1 (437) 425-7157</span></p>
        <p>Languages: <span>English, Spanish</span></p>
        <a href={resume} download="Carlos_Macias_Resume">
        <button className="download-button">Download Resume</button>
        </a>
      </div>

      <div className="skills-section">
        <h2 className="subtitle-txt">Skills</h2>
        <div className="skills">
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaJsSquare className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FaBootstrap className="skill-icon" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-item">
            <BiLogoJquery className="skill-icon" />
            <p>JQuery</p>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <p>MySQL</p>
          </div>
          <div className="skill-item">
            <BiLogoMongodb className="skill-icon" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
      </div>
      <hr className="section-divider" />
      <div className="experience-education-section">
  <div className="experience">
    <FaBriefcase className="section-icon" />
    <h2>Experience</h2>
    <div className="experience-item">
      <div className="experience-details">
        <p className="experience-dates">2022 - present</p>
        <h3>AM Latin Group</h3>
        <p>Consultant</p>
        <p>Identify risks and assessed potential impact, consulting with clients to prepare mitigation plan.
          <br />Write and submit reports based on the information collected.</p>
      </div>
    </div>

    <div className="experience-item">
      <div className="experience-details">
        <p className="experience-dates">2018 - 2021</p>
        <h3>JR Quark Solutions</h3>
        <p>Project Architect</p>
        <p>Complete formal design intent and construction documentation.
          <br />Reported on status of design process and cost analysis to project manager.
          <br />Discussed design specifications and procedures with project manager, engineering team and construction manager.
        </p>
      </div>
    </div>

    <div className="experience-item">
      <div className="experience-details">
        <p className="experience-dates">2016 - 2017</p>
        <h3>Anonima Arquitectura</h3>
        <p>Architectura Draftsman</p>
        <p>Prepare drawins and topographical maps using Autocad and Sketchup.
          <br />Create and modify architectural drawings and documents.
          <br />Use drafting systems software to prepare clean, high-quality project drawings.
          <br />Performe onsite measurements to determine appropriate layouts.
        </p>
      </div>
    </div>
  </div>

  <div className="education">
  <FaUniversity className="section-icon" />
    <h2>Education</h2>
    <div className="education-item">
      <div className="education-details">
        <p className="education-dates">2023 - 2024</p>
        <h3>Full Stack Web Development, Certificate</h3>
        <p>University of Toronto School of Continuing Studies Boot Camps</p>
        <p className="education-city">Toronto, Canada</p>
      </div>
    </div>

    <div className="education-item">
      <div className="education-details">
        <p className="education-dates">2013 - 2017</p>
        <h3>Architecture, Bachelor's Degree</h3>
        <p>Universidad La Salle</p>
        <p className="education-city">Mexico City, Mexico</p>
      </div>
    </div>
    
  </div>
</div>

    </div>
    </>
  );
};

export default About;
