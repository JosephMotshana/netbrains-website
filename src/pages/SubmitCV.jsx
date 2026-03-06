import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UploadCloud } from 'lucide-react';

const SubmitCV = () => {
  return (
    <main className="submit-container">
      <Helmet>
        <title>Submit CV | NetBrains Talent Network</title>
        <meta name="description" content="Upload your resume to the NetBrains AI matching engine." />
      </Helmet>

      <div className="submit-header">
        <h1>Join the <span className="highlight">Network.</span></h1>
        <p>Let our neural matching system find your perfect career alignment.</p>
      </div>

      <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
        {/* Upload Area */}
        <div className="upload-zone full-width">
          <input type="file" accept=".pdf,.doc,.docx" />
          <div className="upload-icon">
            <UploadCloud size={48} />
          </div>
          <h3>Drag & Drop Resume</h3>
          <p>or click to browse files (PDF, DOCX)</p>
        </div>

        {/* Info Fields */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Alan Turing" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="alan@enigma.io" />
        </div>

        <div className="form-group full-width">
          <label>Primary Tech Stack</label>
          <input type="text" placeholder="e.g. React, Go, AWS, Python" />
        </div>

        <div className="form-group full-width">
          <label>LinkedIn or Portfolio URL</label>
          <input type="url" placeholder="https://..." />
        </div>

        <button type="submit" className="submit-btn">
          Upload to NetBrains
        </button>
      </form>
    </main>
  );
};

export default SubmitCV;