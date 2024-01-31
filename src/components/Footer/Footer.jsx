import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="nav-footer" id="footer">
      <ul className="footer-links">
        <li>
          <a href="https://github.com/carlos-2mm">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/carlos-2m">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/carlos_imm">
            <BsTwitterX />
          </a>
        </li>
      </ul>
      <p>Copyright © {new Date().getFullYear()} Carlos Macias. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
