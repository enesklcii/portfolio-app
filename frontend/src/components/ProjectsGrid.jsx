import useFetch from "../hooks/useFetch.js";
import { fetchProjects } from "../api/index.js";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid() {
  const { data: projects, loading, error } = useFetch(() => fetchProjects(), []);

  return (
    <section
      id="projects"
      className="py-5 text-light"
      style={{ background: "transparent", position: "relative", isolation: "isolate" }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 8px rgba(255,215,0,.2)",
            position: "relative",
            zIndex: 10,
          }}
        >
          📂 Projeler
        </h2>

        {loading && <p className="text-muted">⏳ Yükleniyor...</p>}
        {error && <p className="text-danger">❌ Hata: {error}</p>}

        {/* yatay scroll */}
        <div className="scroll-container">
          {projects?.map((p) => (
            <div key={p._id} className="scroll-item">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
