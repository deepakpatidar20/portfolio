import React from "react";

function Skills() {
  return (
    <section className="skills">

      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
      
        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
          <p>CSS</p>
        </div>


        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
          <p>React</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node" />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
          <p>Python</p>
        </div>

<div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React-Native" />
          <p>React-Native</p>
        </div>


<div className="skill-card">
          <img src="data:image/webp;base64,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" alt="Next.js" />
          <p>Next.js</p>
        </div>


<div className="skill-card">
          <img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" alt="Nest.js" />
          <p>Nest.js</p>
        </div>

<div className="skill-card">
          <img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&q=75&fit=max&auto=format&dpr=0.75" alt="Figma" />
          <p>Figma</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;