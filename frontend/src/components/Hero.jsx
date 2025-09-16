import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useProfile } from "../context/ProfileContext.jsx";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const { profile } = useProfile();
  if (!profile) return null;

  return (
    <section
      id="home"
      className="position-relative"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 120, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#00ffcc", "#ff6a00", "#00c6ff", "#ff00ff"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 70 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      />

      {/* Hero Content */}
      <div
        className="container position-relative d-flex flex-column align-items-center justify-content-center text-center text-white"
        style={{ minHeight: "100vh", zIndex: 1 }}
      >
        <h1 className="display-4 fw-bold mb-3">
          Merhaba, ben <span className="text-info">{profile.name}</span>
        </h1>
        <h2 className="h4 text-light mb-4">{profile.title}</h2>
        <p className="lead text-secondary mb-4">{profile.summary}</p>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          {profile.socials?.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
          )}
          {profile.socials?.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          )}
          {profile.socials?.website && (
            <a
              href={profile.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info btn-lg"
            >
              🌐 Website
            </a>
          )}
        </div>

        <div>
          <a href="#projects" className="btn btn-success btn-lg me-3">
            📂 Projelerim
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            📧 İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
