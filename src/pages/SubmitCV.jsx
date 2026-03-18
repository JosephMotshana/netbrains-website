import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { UploadCloud, Send, User, Mail, Link as LinkIcon, CheckCircle, Briefcase, Loader2, ShieldCheck } from 'lucide-react';

const SubmitCV = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  // --- NEW PRIVACY STATE ---
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Safety check: ensure privacy is ticked
    if (!privacyAgreed) {
      alert("Please agree to the Privacy Policy to proceed.");
      return;
    }

    setIsSubmitting(true);

    const form = e.target;
    const file = form.attachment.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = async () => {
      const base64Content = reader.result.split(',')[1];
      
      const params = new URLSearchParams();
      params.append("name", form.name.value);
      params.append("email", form.email.value);
      params.append("linkedin", form.linkedin_profile.value);
      params.append("profession", form.profession.value);
      params.append("fileName", file.name);
      params.append("mimeType", file.type);
      params.append("fileBase64", base64Content);

      try {
        await fetch("https://script.google.com/macros/s/AKfycbwgm8gHuHQ4GrKtoNP4oU1T6vXhodZJMAIULlF6yHM3GaP_iodpKi43MOxD_diwzMsIdg/exec", {
          method: "POST",
          mode: "no-cors", 
          body: params
        });
        
        setIsSuccess(true);
        form.reset();
        setFileName("");
        setPrivacyAgreed(false); // Reset checkbox
      } catch (error) {
        console.error("Upload error:", error);
        alert("There was an error connecting to the server. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
  };

  return (
    <main className="submit-cv-page">
      <Helmet>
        <title>Submit CV | NetBrains Talent Network</title>
      </Helmet>

      <section className="submit-hero">
        <div className="hero-overlay"></div>
        <div className="submit-header">
          <small className="welcome-text">Career Opportunities</small>
          <h1>Join Our <span className="highlight">Talent Network.</span></h1>
          <p>Submit your credentials and let us help you find the perfect role.</p>
        </div>
      </section>

      <div className="form-container">
        {isSuccess ? (
          <div className="success-message" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <CheckCircle size={80} color="#B90E0A" style={{ marginBottom: '20px' }} />
            <h2>Application Received!</h2>
            <p>Your CV has been securely uploaded to our database.</p>
            <button onClick={() => setIsSuccess(false)} className="submit-btn" style={{ marginTop: '20px', width: 'auto', padding: '15px 40px' }}>
              Thank you!! We will keep in touch
            </button>
          </div>
        ) : (
          <form className="cv-form" onSubmit={handleSubmit}>
            
            <div className="upload-zone full-width">
              <input 
                type="file" 
                name="attachment" 
                id="resume-upload" 
                accept=".pdf,.doc,.docx" 
                onChange={(e) => setFileName(e.target.files[0]?.name)}
                required 
              />
              <div className="upload-content">
                <UploadCloud size={48} className="icon-orange" />
                <h3>{fileName || "Click to upload CV"}</h3>
                <p>PDF, DOC, or DOCX (Max 15MB)</p>
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
                <label><Briefcase size={14} /> Primary Profession</label>
                <select name="profession" className="form-select" required>
                  <option value="">Select your role...</option>
                  <optgroup label="IT / Technical">
                    <option value="Software Developer">Software Developer</option>
                    <option value="System Admin">System Admin</option>
                    <option value="Data Analyst">Data Analyst</option>
                  </optgroup>
                  <optgroup label="Human Resources">
                    <option value="HR Manager">HR Manager</option>
                    <option value="Recruitment Specialist">Recruitment Specialist</option>
                  </optgroup>
                  <optgroup label="Administrative">
                    <option value="Office Admin">Office Admin</option>
                    <option value="Executive Assistant">Executive Assistant</option>
                    <option value="Other">Others</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label><LinkIcon size={14} /> LinkedIn URL</label>
                <input type="url" name="linkedin_profile" placeholder="https://linkedin.com/in/..." required />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Professional Bio / Key Skills</label>
              <textarea name="bio" placeholder="Briefly describe your career background..." rows="4"></textarea>
            </div>

            {/* --- NEW PRIVACY CHECKBOX SECTION --- */}
            <div className="form-group full-width privacy-consent">
              <label className="checkbox-label" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', marginTop: '10px' }}>
                <input 
                  type="checkbox" 
                  name="privacy_agreed" 
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  required 
                  style={{ width: '18px', height: '18px', marginTop: '3px', accentColor: '#B90E0A' }}
                />
                <span>
                  I agree to the <strong>NetBrains Privacy Policy</strong> and consent to the processing of my personal data for recruitment purposes.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting || !privacyAgreed} /* Button locks if not agreed */
              style={{ opacity: (!privacyAgreed || isSubmitting) ? 0.6 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="spinner" size={20} /> 
                  Uploading to our Database...
                </>
              ) : (
                <>
                  Submit Application <Send size={18} />
                </>
              )}
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '15px' }}>
              <ShieldCheck size={12} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              Your data is processed in accordance with POPIA and GDPR guidelines.
            </p>
          </form>
        )}
      </div>
    </main>
  );
};

export default SubmitCV;