import "./Header.css";

export default function Header() {
  return (
    <header className="pill-header">
      {/* Logo */}
      <div className="pill-logo">
        <span className="dot"></span>
        Sasindra
      </div>

      {/* Navigation */}
      <nav className="pill-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Resume Button */}
      <a href="https://drive.google.com/file/d/10UQ28iz1Zw7RymmrcgkOlzwngywoNwD7/view" download className="pill-btn">
        Download Resume
      </a>
    </header>
  );
}
