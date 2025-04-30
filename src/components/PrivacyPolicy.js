import React from 'react';
import './footer.css';

function PrivacyPolicy() {
  return (
    <div className="page privacy-policy-page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy outlines how we collect, use, and safeguard your personal data
        when you use our Hospital Management System (HMS).
      </p>

      <h3>1. Information Collection</h3>
      <p>
        We collect personal information including name, contact details, medical history, and appointment records,
        only as necessary for providing our healthcare services.
      </p>

      <h3>2. Use of Information</h3>
      <p>
        Your data is used solely for patient care, appointment scheduling, internal analytics, and service improvement.
        We never sell your personal data to third parties.
      </p>

      <h3>3. Data Security</h3>
      <p>
        We implement strict security protocols, encryption, and access control to protect your data from unauthorized access,
        alteration, or disclosure.
      </p>

      <h3>4. Cookies</h3>
      <p>
        Our platform may use cookies to enhance user experience. You can disable cookies in your browser settings,
        though some features may not function properly.
      </p>

      <h3>5. Third-party Access</h3>
      <p>
        We may share information with authorized healthcare providers under confidentiality agreements. All access is logged and monitored.
      </p>

      <h3>6. Changes to This Policy</h3>
      <p>
        This policy may be updated from time to time. We recommend reviewing it periodically to stay informed.
      </p>

      <p><strong>Last updated:</strong> April 30, 2025</p>
    </div>
  );
}

export default PrivacyPolicy;
