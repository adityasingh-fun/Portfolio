import React from 'react'
import mernLogo from "../../assets/mernLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
            <img src={mernLogo} alt="" />
        </div>
        {/* copyright */}
        <div className="footer-copyright">
            <p>© 2024 Aditya Developers. All rights reserved. </p>
        </div>
        {/* social */}
        <ul className="footer-social-media">
            <li>
                <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
