import "./Skills.css";

export default function Skills() {
  return (
    <section className="ai-skills" id="skills">
      <div className="ai-skills-container">

        {/* HEADING */}
        <h1 className="ai-skills-heading">SKILLS & TOOLS</h1>
        <p className="ai-skills-subheading">
          Technologies and tools I use to build scalable,
          modern, and user-friendly applications.
        </p>

        {/* SKILLS GRID */}
        <div className="ai-skills-grid">

          {/* FRONTEND */}
          <div className="ai-skill-card">
            <h3>Frontend Skills</h3>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
              <span>HTML5</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
              <span>CSS3</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
              <span>Bootstrap</span>
              <small>Intermediate</small>
            </div>
          </div>

          {/* BACKEND & DATABASE */}
          <div className="ai-skill-card">
            <h3>Backend & Database</h3>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
              <span>Spring Boot</span>
              <small>Beginner</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
              <small>Beginner</small>
            </div>
          </div>

          {/* TOOLS */}
          <div className="ai-skill-card">
            <h3>Tools & Platforms</h3>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
              <span>VS Code</span>
              <small>Advanced</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" alt="Eclipse" />
              <span>Eclipse</span>
              <small>Intermediate</small>
            </div>

            <div className="ai-skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" />
              <span>Netlify</span>
              <small>Intermediate</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
