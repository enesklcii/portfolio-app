import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import ProfileProvider from './context/ProfileContext.jsx';
import EducationGrid from './components/EducationGrid.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import CertificatesGrid from './components/CertificatesGrid.jsx';
import './index.css';

export default function App() {
  const token = localStorage.getItem('token');
  const isLoggedIn = token && token.length > 20; // boş ya da geçersiz token olmasın

  return (
    <ProfileProvider>
      <Router>
        <Routes>
          {/* Ana sayfa */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Skills />
                <ProjectsGrid />
                <EducationGrid />
                <CertificatesGrid /> {/* burayı ekledik */}
                <ContactForm />
                <Footer />
              </>
            }
          />

          {/* Admin sayfası */}
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <AdminDashboard />
              ) : (
                <AdminLogin onLogin={() => window.location.reload()} />
              )
            }
          />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}
