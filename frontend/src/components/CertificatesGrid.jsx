import useFetch from "../hooks/useFetch.js";
import { fetchCertificates } from "../api/index.js";

export default function CertificatesGrid() {
  const { data: certificates, loading, error } = useFetch(
    () => fetchCertificates(),
    []
  );

  return (
    <section
      id="certificates"
      className="py-5 text-light"
      style={{ background: "transparent", position: "relative", isolation: "isolate" }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#FFD700", // altın sarısı daha görünür
            textShadow: "0 2px 8px rgba(255,215,0,.2)",
            position: "relative",
            zIndex: 10,
          }}
        >
          🏆 Sertifikalar
        </h2>

        {loading && <p>⏳ Yükleniyor...</p>}
        {error && <p className="text-danger">❌ Hata: {error}</p>}

        {/* Yatay kaydırmalı scrollable container */}
        <div className="scroll-container">
          {certificates?.map((c) => (
            <div key={c._id} className="scroll-item">
              <div className="card bg-dark text-light border-0 shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-info">{c.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{c.provider}</h6>
                  {c.date && (
                    <span className="badge bg-secondary mb-2">{c.date}</span>
                  )}
                  {c.certificateUrl && (
                    <a
                      href={c.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-info mt-auto"
                    >
                      🔗 Görüntüle
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
