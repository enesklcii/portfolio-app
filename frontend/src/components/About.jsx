import { useProfile } from "../context/ProfileContext.jsx";

export default function About() {
  const { profile } = useProfile();
  if (!profile) return null;

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Sol taraf: Fotoğraf */}
          <div className="col-md-4 text-center">
            <img
              src={profile.photo || "data:image/jpeg;base64,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"}
              alt={profile.name}
              className="rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* Sağ taraf: Yazı */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-4">👨‍💻 Hakkımda</h2>
            <p className="text-muted fs-5">{profile.about}</p>

            {/* Kişisel Bilgiler */}
            <ul className="list-unstyled mt-4">
              {profile.email && (
                <li className="mb-2">
                  📧 <strong>Email:</strong>{" "}
                  <a href={`mailto:${profile.email}`} className="text-decoration-none">
                    {profile.email}
                  </a>
                </li>
              )}
              {profile.location && (
                <li className="mb-2">
                  📍 <strong>Konum:</strong> {profile.location}
                </li>
              )}
              {profile.phone && (
                <li className="mb-2">
                  📱 <strong>Telefon:</strong> {profile.phone }
                </li>
              )}
            </ul>

            {/* CV indir butonu */}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg mt-3"
              >
                📄 CV İndir
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
