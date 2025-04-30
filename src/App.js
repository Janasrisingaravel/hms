import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import DoctorLogin from './components/DoctorLogin';
import PatientLogin from './components/PatientLogin';
import DoctorPage from './components/Doctorpage';
import PatientPage from './components/PatientPage';
import AppointmentHistory from './components/AppointmentHistory';
import MyProfile from './components/MyProfile'; 
import MedicalHistory from './components/MedicalHistory'; 
import PatientProfile from './components/PatientProfile';
import BookAppointment from './components/Bookappointment';
import PatientHistory from './components/patientmedhis';
import AdminDashboard from './components/AdminDashboard';
import Department from './components/department';
import AdminPatient from './components/adpatient.js';
import AdminDoctor from './components/addoctor.js';
import Nurse from './components/Nurse';
import Employees from './components/Employees';
import SurgeryTheatre from './components/SurgeryTheatre';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';  // Add imports
import FrequentlyAskedQuestions from './components/FAQ'; // Add imports
import TermsAndConditions from './components/TAC';  // Add imports
import ForgotPassword from './components/Forgotpassword';  // Fix the typo
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/appointment-history" element={<AppointmentHistory />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/book-appointment" element={<BookAppointment />} />
        <Route path="/patient/medical-history" element={<PatientHistory />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/department" element={<Department />} />
        <Route path="/admin/patient" element={<AdminPatient />} />
        <Route path="/admin/Doctor" element={<AdminDoctor />} />
        <Route path="/admin/Nurse" element={<Nurse />} />
        <Route path="/admin/Employees" element={<Employees />} />
        <Route path="/admin/surgerytheatre" element={<SurgeryTheatre />} />
        <Route path="/admin/appointment-history" element={<AppointmentHistory />} />
        <Route path="/about" element={<AboutUs />} /> {/* About Us page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy page */}
        <Route path="/faq" element={<FrequentlyAskedQuestions />} /> {/* FAQ page */}
        <Route path="/terms-conditions" element={<TermsAndConditions />} /> {/* Terms and Conditions page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
