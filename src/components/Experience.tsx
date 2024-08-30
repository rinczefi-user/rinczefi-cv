import React from "react";

const Experience: React.FC = () => (
  <section style={sectionStyle}>
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>Company Name</strong> - Front-End Developer (2021 - Present)
        <p>Developed web applications using React, TypeScript, and Redux.</p>
      </li>
      <li>
        <strong>Company Name</strong> - Web Developer Intern (2020 - 2021)
        <p>
          Assisted in building user interfaces and fixing bugs using HTML, CSS,
          and JavaScript.
        </p>
      </li>
    </ul>
  </section>
);

const sectionStyle = {
  padding: "1rem",
};

export default Experience;
