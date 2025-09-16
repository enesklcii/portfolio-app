import useFetch from '../hooks/useFetch.js';
import { fetchProjects } from '../api/index.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsGrid() {
  const { data: projects, loading, error } = useFetch(() => fetchProjects(), []);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">📂 Projeler</h2>
        {loading && <p>Yükleniyor...</p>}
        {error && <p className="text-danger">Hata: {error}</p>}

        <div className="row g-4">
          {projects?.map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
