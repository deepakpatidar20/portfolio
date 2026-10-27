import React from "react";

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-text">
        <h1>Hello, I'm Deepak</h1>
        <h2>Full Stack Developer</h2>

        <p>
          I build modern, responsive and user-friendly websites using MERN stack.
          Passionate about coding, design and innovation.
        </p>

        <a href="#contact" className="btn">Hire Me</a>
        
        <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>

      <div className="hero-img">
        <img 
          src="deepak.jpg" 
          alt="profile" 
        />
      </div>

    </section>
  );
}

export default Hero;