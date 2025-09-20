import { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm.jsx";
import EducationForm from "./EducationForm.jsx";
import CertificateForm from "./CertificateForm.jsx";
import ProfileForm from "./ProfileForm.jsx";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [collapsed, setCollapsed] = useState(false);

  // Tooltipleri aktifleştir
  useEffect(() => {
  if (window.bootstrap) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => {
      new window.bootstrap.Tooltip(el);
    });
  }
}, []);


  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white p-3 d-flex flex-column ${
          collapsed ? "collapsed-sidebar" : ""
        }`}
        style={{
          width: collapsed ? "80px" : "250px",
          transition: "width 0.4s ease",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 12s ease infinite",
        }}
      >
        {/* Logo & Collapse */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {!collapsed && <h3 className="mb-0">⚙️ Admin</h3>}
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => setCollapsed(!collapsed)}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title={collapsed ? "Genişlet" : "Daralt"}
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>

        {/* Menü Butonları */}
        <button
          className={`btn text-start w-100 mb-2 ${
            activeTab === "profile" ? "btn-primary" : "btn-outline-light"
          }`}
          onClick={() => setActiveTab("profile")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Hakkımda"
        >
          👤 {!collapsed && "Hakkımda"}
        </button>

        <button
          className={`btn text-start w-100 mb-2 ${
            activeTab === "projects" ? "btn-primary" : "btn-outline-light"
          }`}
          onClick={() => setActiveTab("projects")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Projeler"
        >
          📂 {!collapsed && "Projeler"}
        </button>

        <button
          className={`btn text-start w-100 mb-2 ${
            activeTab === "education" ? "btn-primary" : "btn-outline-light"
          }`}
          onClick={() => setActiveTab("education")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Eğitimler"
        >
          🎓 {!collapsed && "Eğitimler"}
        </button>

        <button
          className={`btn text-start w-100 mb-2 ${
            activeTab === "certificates" ? "btn-primary" : "btn-outline-light"
          }`}
          onClick={() => setActiveTab("certificates")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Sertifikalar"
        >
          🏆 {!collapsed && "Sertifikalar"}
        </button>

        {/* Çıkış */}
        <div className="mt-auto">
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin";
            }}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Çıkış"
          >
            🚪 {!collapsed && "Çıkış"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <div className="container">
          {activeTab === "profile" && <ProfileForm />}
          {activeTab === "projects" && <ProjectForm />}
          {activeTab === "education" && <EducationForm />}
          {activeTab === "certificates" && <CertificateForm />}
        </div>
      </div>

      {/* Animasyon için ek CSS */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          .collapsed-sidebar button {
            text-align: center !important;
            padding: 10px 0 !important;
          }
        `}
      </style>
    </div>
  );
}
