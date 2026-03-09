import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// 1. Move the import to the TOP of the file
import homeBg from "../assets/home.png"; 

const Home = () => {
  return (
    <main className="home-wrapper">
      <Helmet>
        <title>NetBrains | Connecting The Right Minds</title>
        <meta name="description" content="NetBrains handles the entire hiring process from start to finish, finding qualified candidates for your business." />
      </Helmet>

      {/* Hero Section: Applied the background image here */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(6, 26, 37, 0.85), rgba(6, 26, 37, 0.85)), url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <br />
            <br />
            <br />
            <small className="welcome-text">Expert Staffing. Seamless Solutions.</small>
            <br /> {/* Line break for spacing */}
            <h1>
              NetBrains - Connecting <span className="highlight">The Right Minds</span> <br /> 
              to the Right Opportunities.
            </h1>
            <p>
              We handle the entire hiring process for your business 
              from start to finish and We don't just fill seats; we find the talent 
              that will help your business thrive.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="hero-btn">Hire Top Talent</Link>
              <Link to="/submit-cv" className="hero-btn secondary">Submit Your CV</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catchy Introduction Grid */}
      <section className="intro-highlights">
        <div className="container">
          <h2 className="section-title">Your End-to-End Hiring Partner</h2>
          <div className="catchy-grid">
            <div className="catchy-card">
              <h3>Human Resources</h3>
              <p>Specialized recruitment for HR staff that drive company culture.</p>
            </div>
            <div className="catchy-card">
              <h3>IT Placements</h3>
              <p>Sourcing technical personnel who power innovation and growth.</p>
            </div>
            <div className="catchy-card">
              <h3>Admin Professionals</h3>
              <p>Precision hiring for the administrative backbone of your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Intermediary Message */}
      <section className="mission-statement">
        <div className="container text-center">
          <p className="large-quote">
            "Our primary function is to act as <strong>intermediaries</strong> between companies and candidates, 
            ensuring a smooth, efficient, and professional experience for everyone involved."
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="final-cta">
        <h2>Ready for a better hiring experience?</h2>
        <p>Let NetBrains connect you with excellence today.</p>
        <Link to="/contact" className="hero-btn">Connect With Us</Link>
      </section>
    </main>
  );
};

export default Home;