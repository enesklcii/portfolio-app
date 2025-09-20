import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      color: "bg-success",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "DevOps & Tools",
      color: "bg-warning",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 65 },
      ],
    },
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      category: "Frontend",
      color: "bg-info",
      items: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + "%";
          } else {
            entry.target.style.width = "0%";
          }
        });
      },
      { threshold: 0.3 }
    );

    progressRefs.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressRefs.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <div className="container">
        {/* Başlık */}
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#FFD700", position: "relative", zIndex: 10 }}
        >
          🛠 Yetenekler
        </h2>

        {/* Scrollable Container */}
        <div className="scroll-container">
          {skills.map((group, i) => (
            <div key={i} className="scroll-item">
              <div className="card bg-black text-light shadow-lg border-0 rounded-3 h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-info mb-4">
                    {group.category}
                  </h5>
                  {group.items.map((skill, j) => (
                    <div key={j} className="mb-3">
                      <div className="d-flex justify-content-between small">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress bg-secondary" style={{ height: "8px" }}>
                        <div
                          ref={(el) => (progressRefs.current[i * 10 + j] = el)}
                          className={`progress-bar ${group.color}`}
                          role="progressbar"
                          data-level={skill.level}
                          style={{
                            width: "0%",
                            transition: "width 1.5s ease-in-out",
                          }}
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
