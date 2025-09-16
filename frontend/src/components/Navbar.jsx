import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll olduğunda arka plan değiştir + aktif link bul
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Aktif section belirleme
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "certificates",
        "contact",
      ];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled
            ? "bg-white shadow-sm navbar-light"
            : "bg-transparent navbar-dark"
        } transition`}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold fs-4" href="#home">
            🚀 Portföy
          </a>

          {/* Hamburger (mobil) */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                { id: "home", label: "Ana Sayfa" },
                { id: "about", label: "Hakkımda" },
                { id: "skills", label: "Yetenekler" },
                { id: "projects", label: "Projeler" },
                { id: "education", label: "Eğitim" },
                { id: "certificates", label: "Sertifikalar" },
                { id: "contact", label: "İletişim" },
              ].map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    className={`nav-link ${
                      active === link.id ? "fw-bold text-primary" : ""
                    }`}
                    href={`#${link.id}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
