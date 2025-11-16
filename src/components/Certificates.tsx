interface Certificate {
  title: string;
  platform: string;
  date: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "Python Complete Course",
    platform: "Udemy",
    date: "Jan 2023"
  },
  {
    title: "Java Programming",
    platform: "Spoken Tutorial (IIT Bombay)",
    date: "Mar 2024"
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    platform: "Udemy",
    date: "June 2025"
  },
  {
    title: "Introduction to Microsoft Azure",
    platform: "Microsoft Learn",
    date: "Aug 2025"
  },
  {
    title: " MATLAB Onramp",
    platform: "Mathworks",
    date: "Oct 2025"
  }
   
];

const Certificates: React.FC = () => {
  return (
    <section id="certifications" className="container">
      <h2 className="gradient-text">Certificates & Courses</h2>

      <div className="timeline" style={{ marginTop: 20 }}>
        {CERTIFICATES.map((c, index) => (
          <div key={index} className="card" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <strong>{c.title}</strong>
              <div style={{ opacity: 0.8, fontSize: 14 }}>{c.platform}</div>
            </div>
            <div style={{ opacity: 0.7, fontSize: 13 }}>{c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
