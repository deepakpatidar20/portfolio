import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">

      <h2 className="section-title">My Portfolio</h2>

      <div className="portfolio-container">

        <div className="portfolio-card">
          <img src="https://via.placeholder.com/300" alt="project" />
          <h3>Login & Signup System</h3>
          <p>Full stack authentication system with MERN stack.</p>
          <a href="https://github.com/deepakpatidar20" className="btn">View Project</a>
        </div>

       
        

      </div>

    </section>
  );
}

export default Portfolio;