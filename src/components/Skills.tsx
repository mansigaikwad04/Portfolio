const PROGRAMMING = ["Python", "Java", "C++"];
const WEB_DEV = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const DATA_SCIENCE = ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "YOLO", "OpenCV"];
const TOOLS = ["VS Code", "Power BI", "Figma", "Jupyter Notebook", "Android Studio"];
const DATABASE = ["SQL", "MongoDB"];

interface SkillGroup {
  category: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  { category: "Programming", items: PROGRAMMING },
  { category: "Web Development", items: WEB_DEV },
  { category: "Data Science & ML", items: DATA_SCIENCE },
  { category: "Developer Tools", items: TOOLS },
  { category: "Database", items: DATABASE }
];

export default function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="gradient-text">Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginTop: "20px"
        }}
      >
        {SKILL_GROUPS.map((group, index) => (
          <div
            key={index}
            className="card"
            style={{
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              textAlign: "center",
              gap: 10
            }}
          >
            {/* Title on top */}
            <h3 style={{ fontSize: 17, margin: 0 }}>{group.category}</h3>

            {/* Skill tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                justifyContent: "center"
              }}
            >
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.12)",
                    fontSize: 13
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
