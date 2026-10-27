import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">

      <h2 className="section-title">My Portfolio</h2>

      <div className="portfolio-container">

        <div className="portfolio-card">
          <img src="src\assets\news.png" alt="project" />
          <h3>News Website</h3>
          <p>I develop websites using HTML, CSS, and JavaScript.</p>
          <a href="https://newsweb-04.vercel.app/" className="btn">View Project</a>
        </div>

        <div className="portfolio-card">
          <img src="src\assets\tea.png" alt="project" />
          <h3>Tea Shop Website</h3>
          <p>Full-Stack Website. Develope Using
Frontend HTML, CSS, JavaScript, Backend PHP, PHPMailer.</p>
          <a href="https://teashop-04.vercel.app/" className="btn">View Project</a>
        </div>

      </div>

    </section>
  );
}

export default Portfolio;