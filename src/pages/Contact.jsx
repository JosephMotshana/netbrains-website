import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact NetBrains | AI Recruitment</title>
        <meta name="description" content="Connect with NetBrains for world-class tech talent sourcing and career opportunities." />
      </Helmet>

      {/* Background Glows */}
      <div className="glow-cyan"></div>
      <div className="glow-blue"></div>

      <div className="contact-grid">
        
        {/* Left Column: Info */}
        <div className="contact-info">
          <h1>
            Let’s build your <br />
            <span className="highlight">Engineering Brain.</span>
          </h1>
          <p className="hero-description">
            Reach out to our specialized consultants for a demo of our AI matching platform.
          </p>

          <div className="info-card">
            <div className="icon-wrapper"><MapPin size={24} /></div>
            <div>
              <small className="welcome-text">Office</small>
              <p>Tech District, Fourways, SA</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrapper" style={{ color: '#3b82f6' }}><Mail size={24} /></div>
            <div>
              <small className="welcome-text">Email</small>
              <p>partnerships@netbrains.io</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" placeholder="E.g. Alan Turing" />
            </div>

            <div className="input-group">
              <label>Company Email</label>
              <input type="email" placeholder="alan@enigma.io" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us what you're building..." />
            </div>

            <button type="submit" className="submit-btn">
              Initiate Connection <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;