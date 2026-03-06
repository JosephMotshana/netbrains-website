import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Brain, Search, Rocket } from 'lucide-react';

const Home = () => {
  return (
    <main className="home-wrapper">
      {/* SEO SECTION - Direct and Crawler Friendly */}
      <Helmet>
        <title>Home | NetBrains AI Recruitment</title>
        <meta name="description" content="NetBrains is a next-generation recruitment agency using AI to connect top software engineers with world-class companies." />
        <meta name="keywords" content="Recruitment, AI, Software Engineering, NetBrains" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <small className="welcome-text">Welcome To NetBrains</small>
            <h1>
              Hire the <span className="highlight">Future</span> <br />
              of Tech.
            </h1>
            <p>
              NetBrains combines neural-matching algorithms with human expertise 
              to find your next lead developer in record time.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="hero-btn">Post a Job</Link>
              <Link to="/services" className="hero-btn secondary">Browse Talent</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon"><Brain size={32} /></div>
          <h3>AI Sourcing</h3>
          <p>Our proprietary algorithms scan GitHub and LinkedIn to find hidden gems.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon"><Search size={32} /></div>
          <h3>Deep Screening</h3>
          <p>Technical interviews conducted by senior developers, not just HR.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon"><Rocket size={32} /></div>
          <h3>Fast Placement</h3>
          <p>Reduce your "Time-to-Hire" by 40% with our pre-vetted pipeline.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;