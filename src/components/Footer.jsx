import React from 'react';
import {BsGithub,BsLinkedin,BsTwitterX} from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <nav>
          <div class="nav-links-container">
            <ul class="nav-links footer-links">
              <li><a href="https://github.com/carlos-2mm"><BsGithub /></a></li>
              <li><a href="https://linkedin.com/in/carlos-macias-m"><BsLinkedin /></a></li>
              <li><a href="https://twitter.com/carlos_imm"><BsTwitterX /></a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Carlos Macias. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;