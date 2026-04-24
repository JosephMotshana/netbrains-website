import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Monitor, 
  FileText, 
  Search, 
  CheckCircle, 
  Megaphone, 
  BrainCircuit 
} from 'lucide-react';

const Services = () => {
  const specialties = [
    {
      title: "Human Resources",
      desc: "Specializing in permanent HR staffing. We help organisations employ top-tier personnel efficiently.",
      icon: <Users size={32} />,
      type: "Permanent"
    },
    {
      title: "IT Placements",
      desc: "Recruiting top IT staff and technical personnel tailored for companies looking to innovate.",
      icon: <Monitor size={32} />,
      type: "Permanent"
    },
    {
      title: "Admin Professionals",
      desc: "Recruiting high-level administrative staff and personnel to ensure your business operations run smoothly.",
      icon: <FileText size={32} />,
      type: "Permanent"
    }
  ];

  const additionalServices = [
    { name: "Professional Advertising", desc: "Targeted job board and social media placement.", icon: <Megaphone size={20} /> },
    { name: "Psychometric Testing", desc: "In-depth candidate personality and aptitude assessments.", icon: <BrainCircuit size={20} /> },
    { name: "Background Checks", desc: "Comprehensive criminal, credit, and qualification verification.", icon: <CheckCircle size={20} /> }
  ];

  return (
    <main className="services-container">
      <Helmet>
        <title>Our Services | Net.Brains Recruitment</title>
        <meta name="description" content="Expert HR, IT, and Admin recruitment services with a contingency-based model." />
      </Helmet>

      <section className="services-hero">
        <div className="hero-overlay">
          <small className="welcome-text">Streamline Hiring</small>
          <h1>
            <span className="highlight">With Recruitment Experts</span>
          </h1>
          <p className="hero-description">
            We handle the entire hiring process from start to finish, ensuring a 
            smooth experience between clients and candidates.
          </p>
        </div>
      </section>

      <div className="services-content">
        {/* Core Specialties */}
        <div className="section-header text-center">
          <h2>Our Core Specialties</h2>
          <p>Connecting businesses with top-tier talent across key industries.</p>
        </div>
        
        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div key={index} className="specialty-card">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="pill">{item.type}</span>
            </div>
          ))}
        </div>

        {/* Value-Added Services (No Pricing) */}
        <section className="additional-services">
          <div className="section-header text-center">
            <h2>Value-Added Services</h2>
            <p>Comprehensive support tools to ensure the perfect fit.</p>
          </div>
          <div className="service-list-simple">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-item-simple">
                <div className="item-icon-title">
                  {service.icon}
                  <h3>{service.name}</h3>
                </div>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contingency Model CTA */}
        <section className="contingency-banner">
          <div className="banner-content">
            <Search size={48} className="icon-orange" />
            <div>
              <h3>Contingency-Based Recruitment</h3>
              <p>
                <strong>Success-Driven:</strong> The client pays only if we successfully place a candidate in their company. 
                We are motivated to find talent that not only fills the role but performs 
                well long-term.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;