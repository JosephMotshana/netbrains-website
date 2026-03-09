import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UploadCloud, Send, FileText, User, Mail, Link as LinkIcon } from 'lucide-react';

const SubmitCV = () => {
  return (
    <main className="submit-cv-page">
      <Helmet>
        <title>Submit CV | NetBrains Talent Network</title>
        <meta name="description" content="Submit your CV to NetBrains. We connect top talent in HR, IT, and Admin with premier South African and global companies." />
      </Helmet>

      <section className="submit-hero">
        <div className="hero-overlay"></div>
        <div className="submit-header">
          <small className="welcome-text">Career Opportunities</small>
          <h1>Join Our <span className="highlight">Talent Network.</span></h1>
          <p>Submit your profile and let our expert intermediaries match you with the right role.</p>
        </div>
      </section>

      <div className="form-container">
        {/* Important: enctype="multipart/form-data" is required for file uploads */}
        <form 
          className="cv-form" 
          action="https://formspree.io/f/xkogdjbr" 
          method="POST" 
          enctype="multipart/form-data"
        >
          {/* File Upload Zone */}
          <div className="upload-zone full-width">
            <input type="file" name="resume" id="resume-upload" accept=".pdf,.doc,.docx" required />
            <div className="upload-content">
              <UploadCloud size={48} className="icon-orange" />
              <h3>Upload Your Resume</h3>
              <p>Drag & drop or click to browse (PDF, DOCX)</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label><User size={14} /> Full Name</label>
              <input type="text" name="name" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <label><Mail size={14} /> Email Address</label>
              <input type="email" name="email" placeholder="email@example.com" required />
            </div>

            <div className="form-group">
              <label><FileText size={14} /> Area of Expertise</label>
              <select name="expertise" className="form-select">
                <option value="IT / Technical">IT / Technical</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Administrative">Administrative</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label><LinkIcon size={14} /> LinkedIn / Portfolio URL</label>
              <input type="url" name="portfolio" placeholder="https://linkedin.com/in/yourprofile" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Short Bio / Key Skills</label>
            <textarea name="bio" placeholder="Briefly describe your professional background..." rows="4"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
};

export default SubmitCV;