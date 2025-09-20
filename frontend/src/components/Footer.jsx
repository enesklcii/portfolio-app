import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Scroll durumunu dinle
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Yukarı çık
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-black bg-opacity-75 text-light py-4 mt-5 border-top border-secondary">
        <div className="container">
          <div className="row align-items-center">
            {/* Sol taraf */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 small text-muted">
                © {new Date().getFullYear()}{" "}
                <span className="text-info">Enes Kılıcı</span> — Tüm Hakları Saklıdır.
              </p>
            </div>

            {/* Sağ taraf: Sosyal Medya */}
            <div className="col-md-6 text-center text-md-end">
              <a
                href="https://github.com/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="social-icon github me-3 fs-5"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="social-icon linkedin me-3 fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="mailto:klc02enes36@gmail.com"
                className="social-icon mail fs-5"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Yukarı Çık Butonu */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-info position-fixed shadow-lg"
          style={{
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            zIndex: 1000,
          }}
        >
          <i className="bi bi-arrow-up fs-5"></i>
        </button>
      )}
    </>
  );
}
