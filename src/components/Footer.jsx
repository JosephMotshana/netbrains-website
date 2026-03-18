import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding & Mission */}
        <div className="footer-brand">
          <h2 className="footer-logo">NET<span className="highlight">BRAINS</span></h2>
          <p>
            Revolutionizing recruitment through neural-matching algorithms 
            and technical expertise. Based in the heart of South Africa's tech hub.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-section">
          <h3>Network</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>Our Mission</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/submit-cv" onClick={scrollToTop}>Join the Talent Pool</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={16} className="highlight" />
              <a href="mailto:info@netbrains.agency">info@netbrains.agency</a>
            </li>
            <li>
              <MapPin size={16} className="highlight" />
              <span>Spaces Broadacres,Fourways,SANDTON,2021</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} NetBrains Agency. All rights reserved.</p>
          <Link to="https://actsquadrant.com/" className="hero-btn">Powered By Acts Quadrant</Link>
          <div className="footer-legal">
            <Link to="https://docs.google.com/document/d/1liXejC_K33p6M0Gy3UlV2wakqzSRsfia8fILMQtjuxw/edit?usp=sharing">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="https://drive.google.com/file/d/1AptEhs1d-d5pBJbhaTo_gpMYRpadXehg/view?usp=drive_link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;