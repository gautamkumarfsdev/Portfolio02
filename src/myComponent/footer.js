import React from "react";
import "./login.css";



function Footer() {
    return (
        <>
        <footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2 className="footer-logo">Gautam Kumar</h2>
      <p className="footer-tagline">
        Software Developer passionate about building modern,
        scalable and user-friendly web applications.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>
      <p>Email: gautamkumarfs.dev@gmail.com</p>
      <p>Location: (Patna) India</p>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Gautam Kumar. All Rights Reserved.
  </div>
</footer>

        </>
    )
}

export default Footer;