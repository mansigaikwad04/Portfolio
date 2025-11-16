export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontSize: 14 }}>
            © {new Date().getFullYear()} <strong>Mansi Gaikwad</strong>
          </div>
          <div style={{ opacity: 0.8 }}>
            Built with React • Designed for clarity
          </div>
        </div>
      </div>
    </footer>
  );
}
