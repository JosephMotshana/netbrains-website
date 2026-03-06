import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Cpu, Users, Code2, Zap, BarChart3 } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: "AI Talent Matching",
      desc: "Our neural engine scans 50+ data points to match candidates based on actual code quality and stack compatibility.",
      icon: <Cpu size={32} />
    },
    {
      title: "Technical Vetting",
      desc: "Every engineer passes a rigorous live-coding assessment conducted by our in-house network of Senior Architects.",
      icon: <Code2 size={32} />
    },
    {
      title: "Executive Search",
      desc: "Headhunting for CTOs, VPs of Engineering, and Tech Leads who possess both vision and deep technical roots.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Team Scaling",
      desc: "Need to build a squad of 10+ devs? We handle the pipeline, screening, and onboarding in parallel to save time.",
      icon: <Users size={32} />
    },
    {
      title: "Market Intelligence",
      desc: "Real-time data on salary benchmarks, tech-stack trends, and talent heatmaps to guide your hiring strategy.",
      icon: <BarChart3 size={32} />
    },
    {
      title: "On-Demand Support",
      desc: "Flexible recruitment support for high-growth startups that need to move at the speed of light.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <main className="services-container">
      <Helmet>
        <title>Our Services | NetBrains Recruitment</title>
        <meta name="description" content="AI-driven recruitment services, technical vetting, and rapid team scaling for tech companies." />
      </Helmet>

      <div className="grid-overlay"></div>

      <div className="services-content">
        <header className="services-header">
          <h1>
            Recruitment <br />
            <span className="gradient-text">Re-Engineered.</span>
          </h1>
          <p className="hero-description">
            Standard recruitment is broken. We use data science and technical intuition 
            to fix the link between talent and innovation.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;