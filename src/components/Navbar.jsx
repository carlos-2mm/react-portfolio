function Navbar({ handlePageChange }) {
    return (
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navbar;