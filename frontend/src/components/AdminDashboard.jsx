import { useState } from 'react';
import ProjectForm from './ProjectForm.jsx';
import EducationForm from './EducationForm.jsx';
import CertificateForm from './CertificateForm.jsx';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px' }}>
        <h3 className="mb-4">⚙️ Admin Panel</h3>
        <button
          className={`btn w-100 mb-2 ${activeTab === 'projects' ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={() => setActiveTab('projects')}
        >
          📂 Projeler
        </button>
        <button
          className={`btn w-100 mb-2 ${activeTab === 'education' ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={() => setActiveTab('education')}
        >
          🎓 Eğitimler
        </button>
        <button
          className={`btn w-100 mb-2 ${activeTab === 'certificates' ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={() => setActiveTab('certificates')}
        >
          🏆 Sertifikalar
        </button>
        <button
          className="btn btn-danger w-100 mt-auto"
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/admin';
          }}
        >
          🚪 Çıkış
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <div className="container">
          {activeTab === 'projects' && <ProjectForm />}
          {activeTab === 'education' && <EducationForm />}
          {activeTab === 'certificates' && <CertificateForm />}
        </div>
      </div>
    </div>
  );
}
