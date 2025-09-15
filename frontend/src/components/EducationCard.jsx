export default function EducationCard({ e }) {
  return (
    <article className="card">
      <div className="card-body">
        <h4>🎓 {e.title}</h4>
        <p><strong>🏢 {e.provider}</strong> – {e.date}</p>
        <p>{e.description}</p>
      </div>
      {e.certificateUrl && (
        <div className="card-actions">
          <a href={e.certificateUrl} target="_blank" rel="noreferrer">
            Sertifikayı Görüntüle
          </a>
        </div>
      )}
    </article>
  );
}
