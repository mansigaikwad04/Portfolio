import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  repo: string;
}

const PROJECTS: Project[] = [
  {
    id: "newsdesk",
    title: "NewsDesk",
    desc: "Real-time news app using NewsAPI with categories, search and bookmarks.",
    tags: ["React", "NewsAPI", "Tailwind"],
    repo: "https://github.com/mansigaikwad04/NewsDesk"
  },
  {
    id: "fortscape",
    title: "Fortscape",
    desc: "Tourism website for Maharashtra forts with guides, maps and itineraries.",
    tags: ["React", "Node", "MongoDB"],
    repo: "https://github.com/mansigaikwad04/FortScape"
  },
  {
    id: "hotelinsight",
    title: "Hotel Insights",
    desc: "Power BI dashboard analyzing hotel performance across cities & room classes.",
    tags: ["Power BI", "DAX", "Excel"],
    repo: "https://github.com/mansigaikwad04/Hotel_Insight_dashboard"
  },
  {
    id: "har",
    title: "Real-time Human Action Recognition",
    desc: "Real-time system using OpenCV + YOLO + action recognition.",
    tags: ["OpenCV", "PyTorch", "Flask", "WebSocket"],
    repo: "#" // update later
  }
];

const MotionCard = motion.div;

function ProjectCard({ p }: { p: Project }) {
  return (
    <MotionCard
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 20,
        borderRadius: 12,
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <h3 style={{ margin: 0 }}>{p.title}</h3>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{p.tags[0]}</div>
      </div>

      <p style={{ margin: 0, opacity: 0.8 }}>{p.desc}</p>

      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <a
          className="btn"
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            border: "1px solid #a855f7"
          }}
        >
          Repo
        </a>
      </div>
    </MotionCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container">
      <motion.h2
        className="gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.h2>

      <motion.p
        style={{ opacity: 0.8, maxWidth: 900 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A selection of projects — from dashboards and websites to real-time ML systems.
      </motion.p>

      <div style={{ marginTop: 18 }} className="grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
