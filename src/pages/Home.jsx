import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main className="home-wrapper">
      <Helmet>
        <title>Net.Brains | Connecting The Right Minds</title>
        <meta name="description" content="Net.Brains handles the entire hiring process from start to finish, finding qualified candidates for your business." />
      </Helmet>

      {/* Hero Section: The Big Hook */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <small className="welcome-text">Expert Staffing. Seamless Solutions.</small>
            <h1>
              Connecting <span className="highlight">The Right Minds</span> <br /> 
              to the Right Opportunities.
            </h1>
            <p>
              Net.Brains is the agency that handles the entire hiring process for your business 
              from start to finish. We don't just fill seats; we find the talent 
              that helps your business thrive.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="hero-btn">Hire Top Talent</Link>
              <Link to="/submitcv" className="hero-btn secondary">Submit Your CV</Link>
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
        <p>Let Net.Brains connect you with excellence today.</p>
        <Link to="/contact" className="hero-btn">Connect With Us</Link>
      </section>
    </main>
  );
};

export default Home;