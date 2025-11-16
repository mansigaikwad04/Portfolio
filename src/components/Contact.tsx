import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = e.currentTarget;

    const templateParams = {
      title:
        (form.elements.namedItem("subject") as HTMLInputElement)?.value ||
        "New Message",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess("Email sent successfully!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to send email. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.section
      id="contact"
      className="container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="gradient-text">Contact</h2>
      <p style={{ opacity: 0.8 }}>
        Want to collaborate or ask about a project? Send a message using the
        form below.
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        <form
          className="form card"
          onSubmit={handleSendEmail}
          style={{ flex: 1, minWidth: 280 }}
        >
          <input
            className="input"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="input"
            name="email"
            placeholder="Your email"
            type="email"
            required
          />
          <input
            className="input"
            name="subject"
            placeholder="Subject (optional)"
          />
          <textarea
            name="message"
            className="input"
            placeholder="Message..."
            required
          />

          <button
            className="btn"
            type="submit"
            disabled={loading}
            style={{ marginTop: 8 }}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>

          {success && (
            <p style={{ color: "#4ade80", marginTop: 6 }}>{success}</p>
          )}
          {error && <p style={{ color: "#f87171", marginTop: 6 }}>{error}</p>}
        </form>

        <div
          className="card"
          style={{
            flex: 0.5,
            minWidth: 240,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: 8 }}>Connect With Me</h3>

          <a className="btn" href="mailto:mansigaikwad221204@gmail.com">
            Email Me
          </a>

          <a
            className="btn"
            href="https://github.com/mansigaikwad"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn"
            href="https://www.linkedin.com/in/mansi-gaikwad-780b82257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}
