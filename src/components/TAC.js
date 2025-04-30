import React from 'react';
import './footer.css';

function TermsAndConditions() {
  return (
    <div className="page terms-conditions-page">
      <h1>Terms and Conditions</h1>
      <p>
        By accessing or using our Hospital Management System (HMS), you agree to be bound by the following terms and conditions.
        Please read them carefully before using the system.
      </p>

      <h3>1. Use of Service</h3>
      <p>
        This platform is intended solely for managing hospital operations. Any unauthorized use or misuse of the platform
        may lead to access restrictions or legal action.
      </p>

      <h3>2. User Responsibilities</h3>
      <p>
        Users must maintain the confidentiality of login credentials. You are responsible for all activities that occur
        under your account.
      </p>

      <h3>3. Intellectual Property</h3>
      <p>
        All content, trademarks, logos, and software on this site are the property of the hospital or its licensors.
        You may not copy, modify, distribute, or use any materials without permission.
      </p>

      <h3>4. Termination of Access</h3>
      <p>
        We reserve the right to terminate or suspend user access if any terms are violated, with or without prior notice.
      </p>

      <h3>5. Modifications</h3>
      <p>
        We may revise these terms from time to time. Continued use of the system implies your acceptance of the latest version.
      </p>

      <p><strong>Last updated:</strong> April 30, 2025</p>
    </div>
  );
}

export default TermsAndConditions;
