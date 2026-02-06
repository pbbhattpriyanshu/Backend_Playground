import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1>About Us</h1>

        <p className="about-intro">
          We build simple, scalable, and reliable digital experiences.
        </p>

        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            We are a team focused on building modern web applications with
            clean architecture, strong fundamentals, and long-term
            maintainability in mind.
          </p>
        </div>

        <div className="about-section">
          <h3>What We Do</h3>
          <p>
            From frontend interfaces to backend systems, we design and
            implement solutions that scale with real-world usage.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Values</h3>
          <ul>
            <li>Clean code over clever code</li>
            <li>User-first design</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
