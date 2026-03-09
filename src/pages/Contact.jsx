import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import contactsBg from '../assets/logo.png'; 

const Contact = () => {
  return (
    <main className="contact-page-wrapper">
      <Helmet>
        <title>Connect with Net.Brains | Expert Recruitment Intermediaries</title>
        <meta name="description" content="Reach out to Net.Brains for specialized HR, IT, and Admin recruitment services. Let us handle your entire hiring process." />
      </Helmet>

      <section 
        className="contact-hero-section" 
        style={{ backgroundImage: `url(${contactsBg})` }}
      >
        {/* Navy Overlay to match brand */}
        <div className="contact-overlay"></div>

        <div className="contact-container">
          
          {/* Left Side: Agency Info */}
          <div className="contact-info-panel">
            <h1 className="contact-title">
              Let’s  <br />
              <span className="highlight">Connect.</span>
            </h1>
            <p className="contact-subtitle">
              Whether you are looking to hire top-tier talent or seeking your next career milestone, 
              our team is ready to facilitate the journey.
            </p>

            <div className="contact-methods">
              
              {/* Phone/WhatsApp */}
              <div className="method-item">
                <div className="icon-circle">
                  <Phone size={24} />
                </div>
                <div>
                  <label>Call / WhatsApp</label>
                  <a href="tel:+27 64 919 9722">+27 64 919 9722</a>
                </div>
              </div>

              {/* Email */}
              <div className="method-item">
                <div className="icon-circle">
                  <Mail size={24} />
                </div>
                <div>
                  <label>Email Our Consultants</label>
                  <a href="mailto:info@netbrains.co.za">info@netbrains.co.za</a>
                </div>
              </div>

              {/* Location */}
              <div className="method-item">
                <div className="icon-circle">
                  <MapPin size={24} />
                </div>
                <div>
                  <label>Our Headquarters</label>
                  <p>South Africa | Serving Global Markets</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Professional Inquiry Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <MessageSquare className="icon-orange" />
              <h3>Send an Inquiry</h3>
              <p>Our intermediaries typically respond within 2-4 business hours.</p>
            </div>
            
            <form action="https://formspree.io/f/xkogdjbr" method="POST" className="main-contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>Inquiry Type</label>
                <select name="type" className="form-select">
                  <option value="hiring">I'm looking to hire talent</option>
                  <option value="job-seeker">I'm looking for a career change</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="input-group">
                <label>How can we assist you?</label>
                <textarea name="message" placeholder="Tell us about your requirements..." rows="4" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;