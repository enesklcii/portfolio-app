import useFetch from '../hooks/useFetch.js';
import { fetchEducation } from '../api/index.js';
import EducationCard from './EducationCard.jsx';

export default function EducationGrid() {
  const { data: education, loading, error } = useFetch(() => fetchEducation(), []);

  return (
    <section id="education" className="section">
      <div className="container">
        <h3>Eğitimler & Sertifikalar</h3>
        {loading && <p>Yükleniyor...</p>}
        {error && <p>Hata: {error}</p>}

        <div className="scroll-container">
          {education?.map((e) => (
            <div key={e._id} className="scroll-item">
              <EducationCard e={e} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
