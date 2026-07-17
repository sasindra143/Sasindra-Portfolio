import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "PR Skill Verse – Online Learning Platform (LMS)",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770429747/Screenshot_2026-02-07_072614_ewczq3.png",
    description:
      "Developed a full-stack Learning Management System where students can access courses and video lessons. Implemented authentication, course management, and responsive dashboards for both admins and learners.",
    tech: "React, JavaScript, HTML5, CSS3, Firebase Authentication, Firestore, Netlify",
    live: "https://www.prskillverse.com",
    github: "https://github.com/sasindra143/pr-skillverse-frontend",
  },
  {
    title: "Vaakya Creations – Women's Clothing E-Commerce",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770431009/Screenshot_2026-02-07_075312_xixwcf.png",
    description:
      "Built a responsive women's clothing e-commerce website showcasing product collections and modern UI components with smooth navigation to improve the online shopping experience.",
    tech: "React, Node.js, JavaScript, HTML5, CSS3, MySQL",
    live: "https://vaakya-creations.netlify.app/",
    github: "https://github.com/sasindra143/Vaakya-Creations",
  },
  {
    title: "360 VertexSolutions – Business Services Website",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1773294272/Screenshot_2026-03-12_110821_ssifky.png",
    description:
      "Developed a modern business website to showcase services like web development, portfolio creation, branding and digital solutions for startups and students.",
    tech: "React, JavaScript, HTML5, CSS3, Netlify",
    live: "https://360vertexsolutions.com/",
    github: "https://github.com/sasindra143/360-vertex-solutions",
  },
  
  {
  title: "Ration Shop Management System",
  image:
    "https://res.cloudinary.com/dvknx0hpm/image/upload/v1784313102/Screenshot_2026-07-18_000001_nep3ee.png",
  description:
    "Developed a responsive ration shop management system that streamlines ration card management, product distribution, beneficiary records, and inventory tracking through an intuitive and user-friendly interface.",
  tech: "React, Node.js, JavaScript, HTML5, CSS3, MySQL",
  live: "https://ration-shop-management-sys-sunkesula.netlify.app/",
  github: "https://github.com/sasindra143/ration-shop-management-system",
},
{
  title: "College Finder Application",
  image:
    "https://res.cloudinary.com/dvknx0hpm/image/upload/v1784313277/Screenshot_2026-07-18_000412_bdjnb4.png",
  description:
    "Built a responsive college finder application that helps students explore colleges with an easy-to-use interface, search functionality, and organized college information for better decision-making.",
  tech: "React, JavaScript, HTML5, CSS3",
  live: "https://colleges-finder-apllication.netlify.app/",
  github: "https://github.com/sasindra143/College-Finder",
},
];

export default function Projects() {
  const sectionRef = useRef(null);

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

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">

        <h1 className="projects-heading">Projects</h1>

        <p className="projects-subheading">
          Selected projects demonstrating frontend, backend and
          problem-solving skills through real-world applications.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h2>{project.title}</h2>

                <p className="project-desc">
                  {project.description}
                </p>

                <h4>Technologies</h4>

                <p className="project-tech">
                  {project.tech}
                </p>

                <div className="project-links">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
