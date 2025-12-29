import "./Certifications.css";

const certifications = [
  {
    title: "Java Full Stack Development",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989425/Screenshot_2025-12-29_115306_lebwox.png",
    provider: "TAP ACADEMY",
    description:
      "Comprehensive training in HTML, CSS, JAVA SCRIPT, REACT Core Java, Advanced Java, JDBC, Servlets, and full-stack development concepts.",

    // ✅ YOUR REAL CERTIFICATE
    link: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989425/Screenshot_2025-12-29_115306_lebwox.png",
  },

  {
    title: "Generative AI Ceritification",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989406/Screenshot_2025-12-29_115204_ogwkak.png",
    provider: "Online Learning Platform",
    description:
      "Certification focused on Generative AI concepts, prompt engineering, and real-world AI use cases.",

    // ✅ YOUR REAL CERTIFICATE
    link: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989406/Screenshot_2025-12-29_115204_ogwkak.png",
  },

  {
    title: "Workshop on AI Automation Ceritification",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989520/Gen_AI_certificate_360DigiTMG_zb2aor.jpg",
    provider: "360DigiTMG",
    description:
      "  Hands-on experience in building Automation to the Slack With Zapier.",

    // ✅ YOUR REAL CERTIFICATE
    link: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766989520/Gen_AI_certificate_360DigiTMG_zb2aor.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="ai-cert" id="certifications">
      <div className="ai-cert-container">

        <h1 className="ai-cert-heading">CERTIFICATIONS</h1>
        <p className="ai-cert-subheading">
          Professional certifications and training programs that enhanced my
          technical knowledge and practical skills.
        </p>

        <div className="ai-cert-grid">
          {certifications.map((cert, index) => (
            <div className="ai-cert-card" key={index}>

              <div className="ai-cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>

              <div className="ai-cert-content">
                <h3>{cert.title}</h3>
                <span className="cert-provider">{cert.provider}</span>
                <p className="cert-desc">{cert.description}</p>

                {/* ✅ OPENS YOUR ACTUAL CERTIFICATE */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
