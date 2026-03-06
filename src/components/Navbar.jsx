import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../assets/logo.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        <Link to="/" onClick={closeMenu} className="logo-link">
          <img src={navbarLogo} alt="Logo" className="logo" />
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
        </div>

        <ul className={isMenuOpen ? "nav-links mobile-open" : "nav-links"}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link to="/services" onClick={closeMenu}>SERVICES</Link></li>
          <li><Link to="/submitcv" onClick={closeMenu}>SUBMIT CV</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>CONNECT</Link></li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
