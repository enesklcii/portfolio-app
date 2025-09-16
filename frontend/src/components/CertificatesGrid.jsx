import useFetch from '../hooks/useFetch.js';
import { fetchCertificates } from '../api/index.js';

export default function CertificatesGrid() {
  const { data: certificates, loading, error } = useFetch(() => fetchCertificates(), []);

  return (
    <section id="certificates" className="py-5 bg-light">
      <div className="container">
        <h3 className="mb-4">🏆 Sertifikalar</h3>
        {loading && <p>Yükleniyor...</p>}
        {error && <p className="text-danger">Hata: {error}</p>}

        <div className="d-flex overflow-auto gap-3 pb-3">
          {certificates?.map((c) => (
            <div key={c._id} className="card shadow-sm" style={{ minWidth: '250px' }}>
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{c.provider}</h6>
                <p className="card-text">
                  {c.date && <span className="badge bg-secondary me-2">{c.date}</span>}
                </p>
                {c.certificateUrl && (
                  <a
                    href={c.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Görüntüle
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
