import useFetch from "../hooks/useFetch.js";
import { fetchEducation } from "../api/index.js";
import EducationCard from "./EducationCard.jsx";

export default function EducationGrid() {
  const { data: education, loading, error } = useFetch(() => fetchEducation(), []);

  return (
    <section
      id="education"
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
          🎓 Eğitimler
        </h2>

        {loading && <p className="text-muted">⏳ Yükleniyor...</p>}
        {error && <p className="text-danger">❌ Hata: {error}</p>}

        {/* yatay scroll */}
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
