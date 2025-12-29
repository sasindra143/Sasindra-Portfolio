import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ai-footer">
      <div className="ai-footer-container">

        {/* LEFT – BRANDING */}
        <div className="ai-footer-brand">
          <h2>SASINDRA MADDURI</h2>
          <p>
            Java Full Stack Developer focused on building scalable,
            clean, and real-world software solutions.
          </p>
        </div>

        {/* CENTER – QUICK LINKS */}
        <div className="ai-footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT – SOCIAL ICONS WITH NAME */}
        <div className="ai-footer-socials">
          <h4>Connect</h4>

          <a href="mailto:sasindragandla@gmail.com">
            <span>📧</span> <p>Email</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sasindra-madduri"
            target="_blank"
            rel="noreferrer"
          >
            <span>🔗</span> <p>LinkedIn</p>
          </a>

          <a
            href="https://github.com/sasindra143"
            target="_blank"
            rel="noreferrer"
          >
            <span>💻</span> <p>GitHub</p>
          </a>

          <a
            href="https://wa.me/919959732476"
            target="_blank"
            rel="noreferrer"
          >
            <span>📱</span> <p>WhatsApp</p>
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="ai-footer-copy">
        © {year} Sasindra Madduri. All rights reserved.
      </div>
    </footer>
  );
}
