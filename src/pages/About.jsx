import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <main className="about-container">
      <Helmet>
        <title>About Us | NetBrains AI Recruitment</title>
        <meta name="description" content="Learn how NetBrains uses AI and neural matching to revolutionize tech recruitment." />
      </Helmet>

      <section className="about-hero">
        <small className="welcome-text">Our Mission</small>
        <h1>
          Beyond the <br />
          <span className="highlight">Traditional Resume.</span>
        </h1>
      </section>

      <div className="about-content">
        <div className="about-text">
          <p>
            NetBrains was founded on a simple premise: the standard hiring process for software engineers is outdated. 
            Traditional agencies focus on keywords; we focus on code quality, technical influence, and cultural alignment.
          </p>
          <p>
            By leveraging proprietary AI-driven neural matching, we connect MNCs, high-growth startups, and SMEs 
            with talent that isn't just "available," but truly exceptional.
          </p>
          <p>
            Based in South Africa and serving the global tech market, we are building the bridge between 
            the innovators of today and the architects of tomorrow.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">95%</span>
            <span className="stat-label">Placement Rate</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">14d</span>
            <span className="stat-label">Avg. Hire Time</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">500+</span>
            <span className="stat-label">Engineers Placed</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">50+</span>
            <span className="stat-label">Global Partners</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;