import React from "react";
import logo from "../assets/mernLogo.png";
import "./Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/aditya-singh-1874b41ab/" target="blank">Linked-In <FaLinkedin className="iconss"/></a>
            </li>
            <li>
                <a href="https://github.com/adityasingh-fun" target="blank"> Github Profile <FaGithub className="iconss"/></a>
            </li>
            
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
