export default function Experience() {
  return (
    <section id="exp" className="container">
      <h2 className="gradient-text">Experience</h2>

      <div style={{ marginTop: 14 }} className="timeline">
        <div className="timeline-item card">
          <div style={{ flex: 1 }}>
            <strong>NexusLogic Technologies</strong>
            <div style={{ fontSize: 13, opacity: 0.8 }}>Intern — Hyderabad</div>
            <ul style={{ marginTop: 8 }}>
              <li>Built a news application using NewsAPI with search, category filtering, and infinite scroll </li>
              <li>Developed a Project Management System Dashboard for tracking tasks and budgets</li>
            </ul>
          </div>
          <div style={{ fontSize: 12, opacity: 0.6 }}>Jan 2025 — Apr 2025</div>
        </div>

        <div className="timeline-item card">
          <div style={{ flex: 1 }}>
            <strong>GeeksForGeeks Student Chapter 2.0, PCCOER</strong>
            <div style={{ fontSize: 13, opacity: 0.8 }}>Social Media Team Member</div>
            <ul style={{ marginTop: 8 }}>
              <li>Managed social media content and engagement for the student chapter.</li>
              <li>Collaborated with team members on campaigns and tech events.</li>
            </ul>
          </div>
          <div style={{ fontSize: 12, opacity: 0.6 }}>2023 – 2024, Pune</div>
        </div>
      </div>
    </section>
  );
}
