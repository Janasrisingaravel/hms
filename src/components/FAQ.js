import React from 'react';
import './footer.css';

function FrequentlyAskedQuestions() {
  return (
    <div className="page faq-page">
      <h1>Frequently Asked Questions</h1>

      <h3>Q: What is this Hospital Management System?</h3>
      <p>
        A: This is a comprehensive software designed to manage hospital operations such as patient records,
        appointment scheduling, and staff management.
      </p>

      <h3>Q: How can I access my patient information?</h3>
      <p>
        A: You can log in as a patient or doctor to view appointments, medical records, and prescriptions.
      </p>

      <h3>Q: Is my data secure?</h3>
      <p>
        A: Yes, we use encrypted storage to ensure the security of your data.
      </p>
    </div>
  );
}

export default FrequentlyAskedQuestions;
