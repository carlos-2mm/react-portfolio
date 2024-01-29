import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Project from "./Project";
// import "./Portfolio.css";
import {
  frontEndProjects,
  backEndProjects,
  fullStackProjects,
} from "../utils/projects";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("");
  const [data, setData] = useState([]);
  const [showMessage, setShowMessage] = useState(true);

  const tabs = [
    { id: "frontEnd", title: "Deployed Projects" },
    { id: "backEnd", title: "Non-Deployed Projects" },
    { id: "fullStack", title: "Group Projects" },
  ];

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const list = [
    {
      id: "frontEnd",
      title: "Deployed Projects",
    },
    {
      id: "backEnd",
      title: "Non-Deployed Projects",
    },
    {
      id: "fullStack",
      title: "Group Projects",
    },
  ];

  useEffect(() => {
    if (selectedTab !== "") {
      setShowMessage(false);
    }

    switch (selectedTab) {
      case "frontEnd":
        setData(frontEndProjects);
        break;
      case "backEnd":
        setData(backEndProjects);
        break;
      case "fullStack":
        setData(fullStackProjects);
        break;
      default:
        setData([]);
    }
  }, [selectedTab]);

  return (
    <motion.div
      ref={ref}
      className="portfolio"
      id="portfolio"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h1>Portfolio</h1>
      <div className="tabs">
  {tabs.map((tab, index) => (
    <div 
      key={tab.id} 
      className={`tab ${selectedTab === tab.id ? 'active' : ''}`}
      onClick={() => setSelectedTab(tab.id)}
      style={{ position: 'relative' }}
    >
      {selectedTab === tab.id && (
        <motion.div 
          className="tab-background" 
          layoutId="tab-background"
        />
      )}
      {tab.title}
    </div>
  ))}
</div>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Click on a category to see my projects</h2>
            <motion.div
              className="deskSVG"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <svg
                width="450px"
                height="450px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  strokeWidth={0.5}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12 M15 4L13 6L15 8 M19 4L21 6L19 8 M12 16V20 M8 20H16"
                />
              </svg>
              <svg
                width="450px"
                height="450px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  strokeWidth={0.5}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  d="M 8.14 17.8 L 5.26 14.92 L 8.14 12.04 M 15.81 17.8 L 18.69 14.92 L 15.81 12.04 M 10.06 17.8 L 13.89 12.04 M 1.43 1.49 L 22.53 1.49 L 22.53 22.59 L 1.43 22.59 Z M 22.53 7.25 L 16.25 7.25 L 14.33 7.25 L 1.43 7.25 L 1.43 1.49 L 22.53 1.49 Z M 4.3 4.37 L 6.22 4.37 M 8.14 4.37 L 10.06 4.37 M 11.98 4.37 L 13.89 4.37"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={selectedTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="container"
        >
          {data.map((d) => (
            <motion.div
              className="item"
              key={d.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={d.image} alt="" />
              <h3>{d.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default Portfolio;
