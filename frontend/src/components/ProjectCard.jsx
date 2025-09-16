export default function ProjectCard({ p }) {
  return (
    <div className="card h-100 shadow-sm border-0 project-card">
      {p.imageUrl && (
        <img
          src={p.imageUrl}
          className="card-img-top"
          alt={p.title}
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{p.title}</h5>
        <p className="card-text text-muted">{p.description}</p>

        <div className="mt-2 mb-3">
          {p.techStack?.map((tech, i) => (
            <span key={i} className="badge bg-primary me-1">{tech}</span>
          ))}
        </div>

        <div className="mt-auto">
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark me-2">
              💻 Repo
            </a>
          )}
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success">
              🚀 Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
