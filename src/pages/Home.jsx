import React from "react";
import { Link } from 'react-router-dom';
// import "./Home.css";
import { FaAngleRight } from "react-icons/fa";


function Home() {
  return (
    <section id="home" className="home">
      {/* Profile Card Starts */}
      <div className="profile-card">
        {/* Section Title Starts */}
        <div className="section-title">
          <h1 className="title-txt">I'm Carlos Macias</h1>
          <h2 className="subtitle-txt">Full Stack Developer</h2>
        </div>
        {/* Section Title Ends */}
        <p className="section-txt">
          Passionate and detail-oriented Front End Developer with a strong
          foundation in Full Stack development, gained from a comprehensive
          bootcamp at the University of Toronto. Equipped with a background in
          architecture, I bring a unique blend of design sensibility and
          technical expertise, enhancing my ability to create aesthetically
          pleasing and functionally robust web applications.
        </p>
        <div id="link-about" className="button">
          <Link to="/about">
        <FaAngleRight className="button-icon" />
        <span>about me</span>
      </Link>
        </div>
      </div>
      {/* Profile Card Ends */}
      {/* Image Container Starts */}
      <div className="img-container">
        <img
          className="img-profile"
          src="./public/profile.jpg"
          alt="Profile Picture"
        />
      </div>
      {/* Image Container Ends */}
    </section>
  );
}

export default Home;
