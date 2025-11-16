import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section
      className="hero container"
      style={{ paddingTop: 40 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <section className="hero container" style={{ paddingTop: 40 }}>
      <div className="hero-left">
        <h1 style={{ fontSize: "2.6rem", margin: 0 }}>
          Hi, I’m <span className="gradient-text">Mansi</span> 👋
        </h1>
        <p style={{ marginTop: 12, opacity: 0.9, maxWidth: 680 }}>
         I’m Mansi Gaikwad, a Web Developer and Data Analyst passionate about building interactive digital experiences and data-driven solutions. I work with React, Node.js, and modern UI systems while also analyzing data using Python, SQL, and Power BI. I love turning ideas into clean interfaces and transforming raw data into insights that matter.
        </p>

       <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
  <a
    className="btn"
    href="/Mansi_Gaikwad_04.pdf"
    download
  >
    Download Resume
  </a>
</div>


        <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "center" }}>
          <div className="card" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 4, background: "linear-gradient(90deg,#34d399,#60a5fa)" }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Open for Work</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Available — willing to work as a Data Analyst and Full Stack Developer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile card">
          {/* Replace the src with your profile image in /public or /src/assets */}
          <img src="MansiPhoto.jpeg" alt="Mansi profile" />
        </div>
      </div>
    </section>
    </motion.section>
  );
}
