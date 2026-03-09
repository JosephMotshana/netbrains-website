import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <main className="about-container">
      <Helmet>
        <title>About Us | NetBrains Recruitment</title>
        <meta name="description" content="Net.Brains is a premier recruitment agency specializing in HR, IT, and Admin placements, acting as the vital link between talent and business success." />
      </Helmet>

      {/* Hero Section: Focused on the "Intermediary" role */}
      <section className="about-hero">
        <div className="hero-overlay">
          
          <h1>
            Our <span className="highlight">Mission</span>
          </h1>
          <p className="hero-subtext">
            Simplifying recruitment for businesses by delivering efficient, reliable, and high-quality hiring solutions. We aim to connect companies 
            with top tier professionals who can contribute to growth, innovation, and long-term success.
          </p>
        </div>
      </section>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Net.Brains is the agency that handles the <strong>entire hiring process</strong> for 
            businesses from start to finish. We specialize in streamlined recruitment, 
            connecting companies with top-tier talent through expert sourcing and 
            comprehensive interview management.
          </p>
          
          <h2>Expert Facilitation</h2>
          <p>
            Our primary function is to bridge the gap. We take the pressure off businesses by 
            finding qualified candidates, conducting deep-dive interviews, and clearly 
            communicating job duties and expectations. 
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <h3>Specialized Sourcing</h3>
              <p>We focus on high-impact sectors: Human Resources, IT Placements, and Administrative Professionals.</p>
            </div>
            <div className="pillar">
              <h3>Performance-Driven</h3>
              <p>We are motivated to find candidates who don't just fill a seat, but perform exceptionally within your company culture.</p>
            </div>
          </div>
        </div>

        {/* Updated Stats to reflect your business model */}
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Contingency Based</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">End-to-End</span>
            <span className="stat-label">Hiring Process</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Expert</span>
            <span className="stat-label">Interview MGMT</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Top-Tier</span>
            <span className="stat-label">Talent Sourcing</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;