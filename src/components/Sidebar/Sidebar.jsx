import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    },
  };

  return (
    <>
      <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </>
  );
}

export default Sidebar;
