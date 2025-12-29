import "./About.css";

export default function About() {
  return (
    <section className="ai-about" id="about">
      <div className="ai-container">

        {/* LEFT – CIRCLE IMAGE */}
        <div className="ai-visual">
          <div className="ai-ring"></div>
          <div className="ai-ring inner"></div>

          <div className="ai-core">
            <img
              src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1764812630/WhatsApp_Image_2025-11-08_at_14.35.30_61df71a9_tqnpiu.jpg"
              alt="Sasindra"
            />
            <span className="ai-year">SASINDRA</span>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="ai-content">
          <h1 className="ai-heading">SASINDRA MADDURI</h1>

          <p className="ai-quote">
            “I build scalable software solutions with a focus on performance,
            clean architecture, and real-world impact.” 
          </p>

          <p className="ai-text">
            I am <strong>Sasindra Madduri</strong>, a passionate
            <strong> Java Full Stack Developer</strong> 
            who enjoys building modern web applications using Java, Spring Boot, React, and cloud-ready technologies. 
            Ihave built and managed a real-world freelance platform, PRSkillVerse.com, where I design and deliver scalable solutions for students and businesses.
            My goal is to create systems that solve real problems, not just showcase code.
          </p>

          <p className="ai-subtext">
            I believe technology should make life easier — not more complicated.
            I build for usability, scalability, and long-term value.
          </p>
        </div>

      </div>
    </section>
  );
}
