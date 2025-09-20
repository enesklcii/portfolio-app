export default function EducationCard({ e }) {
  return (
    <div className="card h-100 shadow-sm border-0 edu-card bg-dark text-light">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-info">{e.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{e.provider}</h6>
        <p className="card-text flex-grow-1">{e.description}</p>
        {e.date && <span className="badge bg-secondary mb-2">{e.date}</span>}
        {e.certificateUrl && (
          <a
            href={e.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-info mt-auto"
          >
            🎓 Sertifika Gör
          </a>
        )}
      </div>
    </div>
  );
}
