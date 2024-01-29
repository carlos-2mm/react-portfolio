import { FaHome, FaUser, FaImages, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Links = () => {
  const items = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaUser />, href: "/about" },
    { name: "Portfolio", icon: <FaImages />, href: "/portfolio" },
    { name: "Contact", icon: <FaEnvelopeOpenText />, href: "/contact" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div className="link" variants={itemVariants} key={item.name} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <NavLink to={item.href} exact activeClassName="active">
            {item.name}
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
