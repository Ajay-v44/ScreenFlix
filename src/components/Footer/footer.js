import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About ShareFlix</h3>
          <p>
            ShareFlix is a movie sharing platform where movie enthusiasts can discover, share, and discuss their favorite films. Join our community and explore a world of cinema.
          </p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: vajay88v@gmail.com<br />
            Phone: 123-456-7890<br />
            Address: ShareFlix Adoor , Pathanamthitta
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShareFlix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
