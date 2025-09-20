// components/About.jsx
import { useProfile } from "../context/ProfileContext.jsx";

export default function About() {
  const { profile, loading, error } = useProfile();

  if (loading) return null;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!profile) return null;

  return (
    <section
      id="about"
      className="py-5 bg-dark text-light position-relative"
      style={{ zIndex: 5 }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Fotoğraf */}
          <div className="col-12 col-md-4 text-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="rounded-circle shadow-lg border border-3 border-primary mb-3 mb-md-0"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Bilgiler */}
          <div className="col-12 col-md-8 text-center text-md-start">
            <h2 className="fw-bold mb-2">{profile.name}</h2>
            <h4 className="text-info mb-3">{profile.title}</h4>
            <p className="lead">{profile.about || profile.summary}</p>

            <ul className="list-unstyled mt-4">
              {profile.email && (
                <li className="mb-2">
                  📧{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-decoration-none text-info"
                  >
                    {profile.email}
                  </a>
                </li>
              )}
              {profile.location && <li className="mb-2">📍 {profile.location}</li>}
              {profile.phone && <li className="mb-2">📱 {profile.phone}</li>}
            </ul>

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-lg mt-3"
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
