import React from "react";

function Education() {
  return (
    <section className="education">

      <h2 className="section-title">My Education</h2>

      <div className="education-container">

        {/* Item 1 */}
        <div className="education-box">
          <h3>B.Tech in Computer Science</h3>
          <span>2022 - 2026</span>
          <p>Shri Vaishnav Institute of Information Technology (SVVV), Indore</p>
        </div>

        {/* Item 2 */}
        <div className="education-box">
          <h3>12th (Higher Secondary)</h3>
          <span>2021 - 2022</span>
          <p>MP Board - Science Stream</p>
        </div>

        {/* Item 3 */}
        <div className="education-box">
          <h3>10th (High School)</h3>
          <span>2019 - 2020</span>
          <p>MP Board</p>
        </div>

      </div>

    </section>
  );
}

export default Education;