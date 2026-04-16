import React from "react";

function About() {
  return (
    <section className="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        {/* Image */}
        <div className="about-img">
          <img 
            src="deepak.jpg" 
            alt="profile" 
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <h3>I'm Deepak Patidar</h3>

          <p>
            I am a passionate Full Stack Developer with a strong interest in web development,
            data analytics, and modern technologies. I love building responsive and user-friendly
            websites using the MERN stack.
          </p>

          <p>
            Currently pursuing B.Tech in Computer Science, I am continuously improving my
            skills in JavaScript, React, Node.js, and Python. My goal is to become a professional
            developer and build impactful digital products.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;