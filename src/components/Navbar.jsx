import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import navbarLogo from '../assets/navbar.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Link: Icon + Text */}
        <Link to="/" onClick={closeMenu} className="logo-link">
          <img src={navbarLogo} alt="Net.Brains Logo" className="logo" />
        </Link>

        {/* The wrapper that handles the mobile slide-down */}
        <div className={`nav-wrapper ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
            <li><Link to="/services" onClick={closeMenu}>SERVICES</Link></li>
            <li><Link to="/submitcv" onClick={closeMenu}>SUBMIT CV</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONNECT</Link></li>
          </ul>

          {/* Social links are kept here but hidden via CSS on mobile */}
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Hamburger - Only visible on Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
