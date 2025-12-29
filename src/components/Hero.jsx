import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const fullName = "SASINDRA";
  const [typedName, setTypedName] = useState("");

  const robotRef = useRef(null);
  const faceRef = useRef(null);
  const leftEye = useRef(null);
  const rightEye = useRef(null);

  /* Typing animation */
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(t);
    }, 140);
    return () => clearInterval(t);
  }, []);

  /* Cursor follow */
  useEffect(() => {
    const move = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      if (robotRef.current)
        robotRef.current.style.transform = `translate(${dx * 14}px, ${dy * 14}px)`;

      if (faceRef.current)
        faceRef.current.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Random eye blinking */
  useEffect(() => {
    const blink = () => {
      leftEye.current?.classList.add("blink");
      rightEye.current?.classList.add("blink");

      setTimeout(() => {
        leftEye.current?.classList.remove("blink");
        rightEye.current?.classList.remove("blink");
      }, 180);
    };

    const interval = setInterval(blink, 2500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* CONTENT */}
      <div className="hero-center">
        <h2 className="hero-intro">
          Hi, I am <span className="typing">{typedName}</span>
        </h2>

        <h1 className="hero-title">JAVA FULL STACK DEVELOPER</h1>

        <p className="hero-desc">
          I build <strong>scalable Java applications</strong>,
          <strong> modern React frontends</strong>, and
          <strong> enterprise-ready software solutions</strong>.
        </p>

        <p className="hero-desc">
          Focused on clean architecture, performance,
          and real-world problem solving for companies and startups as a Freelancer.
        </p>

        {/* SKILLS */}
        <div className="skills-section">
          <div className="skills-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </div>
        </div>
      </div>

      {/* 3D ROBOT */}
      <div className="robot-wrapper" ref={robotRef}>
        <div className="robot-head">
          <div className="robot-glow"></div>

          <div className="robot-screen">
            <div className="robot-face" ref={faceRef}>
              <span className="eye" ref={leftEye}></span>
              <span className="eye" ref={rightEye}></span>
            </div>
          </div>
        </div>

        <div className="robot-neck"></div>
      </div>
    </section>
  );
}
