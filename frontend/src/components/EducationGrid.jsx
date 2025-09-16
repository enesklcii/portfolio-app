import useFetch from '../hooks/useFetch.js';
import { fetchEducation } from '../api/index.js';
import EducationCard from './EducationCard.jsx';

export default function EducationGrid() {
  const { data: education, loading, error } = useFetch(() => fetchEducation(), []);

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">🎓 Eğitimler</h2>
        {loading && <p>Yükleniyor...</p>}
        {error && <p className="text-danger">Hata: {error}</p>}

        <div className="row g-4">
          {education?.map((e) => (
            <div key={e._id} className="col-md-4 col-sm-6">
              <EducationCard e={e} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
