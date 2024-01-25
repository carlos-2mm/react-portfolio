import React from "react";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import profilePic from '../../public/profile.jpg';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const imgVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 0.3, duration: 0.5 } }
  };

  return (
    <motion.section 
      id="home" 
      className="home"
      initial="hidden"
      animate="visible"
    >
      {/* Profile Card Starts */}
      <motion.div className="profile-card" variants={containerVariants}>
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
            <span>About Me</span>
          </Link>
        </div>
      </motion.div>
      {/* Profile Card Ends */}
      {/* Image Container Starts */}
      <motion.div className="img-container" variants={imgVariants}>
        <img
          className="img-profile"
          src={profilePic}
          alt="Profile Picture"
        />
      </motion.div>
      {/* Image Container Ends */}
    </motion.section>
  );
}

export default Home;
