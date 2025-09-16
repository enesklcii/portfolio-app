import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Scroll durumunu dinle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Yukarı çık
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Sol taraf: Telif */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Enes Kılıcı — Tüm Hakları Saklıdır.
              </p>
            </div>

            {/* Sağ taraf: Sosyal Medya */}
            <div className="col-md-6 text-center text-md-end">
              <a
                href="https://github.com/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3 fs-5"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3 fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="mailto:klc02enes36@gmail.com"
                className="text-light fs-5"
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
          className="btn btn-primary position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            zIndex: 1000,
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}
