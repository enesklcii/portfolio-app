export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      color: "bg-primary", // progress bar rengi
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 }
      ]
    },
    {
      category: "Backend",
      color: "bg-success",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "DevOps & Tools",
      color: "bg-warning",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          🛠 Yetenekler
        </h2>
        <div className="row g-4">
          {skills.map((group, i) => (
            <div key={i} className="col-md-4">
              <div className="card shadow-lg h-100 border-0 rounded-3">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary mb-4">
                    {group.category}
                  </h5>
                  {group.items.map((skill, j) => (
                    <div key={j} className="mb-3">
                      <div className="d-flex justify-content-between small">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: "8px" }}>
                        <div
                          className={`progress-bar ${group.color}`}
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
