export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="nav-left container" style={{ justifyContent: "space-between" }}>
        <div className="brand">
          <div className="logo-dot" />
          <div>
            <div style={{ fontSize: 17, opacity: 0.85 }}>Mansi Gaikwad</div>
          </div>
        </div>

        <nav className="nav-links" style={{ marginLeft: "auto" }}>
          <a onClick={() => scrollTo("skills")}>Skills</a>
          <a onClick={() => scrollTo("certifications")}>Certifications</a>
          <a onClick={() => scrollTo("projects")}>Projects</a>
          <a onClick={() => scrollTo("experience")}>Experience</a>
          <a onClick={() => scrollTo("contact")}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
