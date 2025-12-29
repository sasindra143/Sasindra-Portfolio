import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "PR Skill Verse – Online Learning Platform (LMS)",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1748352901/Screenshot_2025-05-27_190421_nefoyr.png",
    description:
      "Developed a full-stack LMS using React (Vite), JavaScript, HTML5, and CSS3 Implemented authentication and role-based access using Firebase Authentication Managed real-time data storage for courses and videos using Firebase Firestore Deployed the application on Netlify with a responsive UI for admin and students",
    tech: "JAVA, React, JavaScript, HTML, CSS,  Netlify, Fire Base API",
    live: "https://www.prskillverse.com/",
    github: "https://github.com/sasindra143/pr-skillverse-frontend",
  },
  {
    title: "TODO-LIST",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1766993185/Screenshot_2025-12-29_125558_qhuefr.png",
    description:
      "A full-stack web platform where students can upload, browse, and purchase academic projects with a dedicated developer dashboard.",
    tech: "React, HTML, CSS and JAVA Script",
    live: "https://todo-list-tsk.netlify.app/",
    github: "https://github.com/sasindra143/TO-DO-LIST-React",
  },
  {
    title: "Online Fraud Detection System",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description:
      "A machine learning-based system that analyzes transaction data to detect and predict fraudulent online activities.",
    tech: "Python, Machine Learning, Streamlit",
    live: "#",
    github: "https://github.com/sasindra143/OnLine-Fraud-Transaction-Detection-Using-Machine-Learning",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[index];

  return (
    <section className="ai-projects" id="projects" ref={sectionRef}>
      <div className="ai-projects-container">

        <h1 className="ai-projects-heading reveal">PROJECTS</h1>
        <p className="ai-projects-subheading reveal delay-1">
          Selected projects demonstrating frontend, backend,
          and problem-solving skills.
        </p>

        {/* CAROUSEL */}
        <div className="ai-carousel reveal delay-2">

          <button className="nav-btn left" onClick={prev}>‹</button>

          <div className="ai-project-card">

            {/* IMAGE */}
            <div className="ai-project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="ai-project-content">
              <h2>{project.title}</h2>

              <p className="project-desc">
                {project.description}
              </p>

              <h4>Technologies Used</h4>
              <p className="project-tech">{project.tech}</p>

              <div className="ai-project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

          </div>

          <button className="nav-btn right" onClick={next}>›</button>

        </div>
      </div>
    </section>
  );
}
