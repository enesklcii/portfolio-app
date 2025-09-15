import useFetch from '../hooks/useFetch.js';
import { fetchProjects } from '../api/index.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsGrid() {
  const { data: projects, loading, error } = useFetch(() => fetchProjects(), []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h3>Projeler</h3>
        {loading && <p>Yükleniyor...</p>}
        {error && <p>Hata: {error}</p>}

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
