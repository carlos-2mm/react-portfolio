import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { FaHome, FaUser, FaImages, FaEnvelopeOpenText } from "react-icons/fa";

import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="desktop-nav">
          <motion.div className="logo-container" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
            <img className="logo-img" src="/logo.png" alt="Carlos Macias" />
            <h2 className="logo-txt">
              Carlos <span className="logo-subtxt">Macias</span>
            </h2>
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default Header;
