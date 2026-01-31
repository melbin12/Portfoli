import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi 👋, I am <span className="purple">Melbin M P</span>, a passionate{" "}
            <span className="purple">Data Analyst & Data Science Professional</span>{" "}
            currently based in <span className="purple">Cardiff, United Kingdom</span>.
            <br />
            <br />
            I am pursuing my <span className="purple">MSc in Data Science</span> at{" "}
            <span className="purple">Cardiff Metropolitan University</span>, where I am
            building strong expertise in machine learning, advanced analytics,
            statistical modeling, and AI-driven solutions.
            <br />
            <br />
            I hold a <span className="purple">Master of Computer Applications (MCA)</span>{" "}
            from <span className="purple">Amal Jyothi College of Engineering</span>, along
            with a <span className="purple">BSc in Computer Science</span>. My academic
            background is complemented by hands-on industry experience in software
            development, data analysis, and building scalable data-driven systems.
            <br />
            <br />
            Previously, I worked as a <span className="purple">Software Developer</span>{" "}
            where I developed backend modules, data pipelines, and analytical dashboards
            for healthcare solutions, enabling data-driven decision-making using{" "}
            <span className="purple">Python, SQL, Power BI, and Machine Learning models</span>.
            <br />
            <br />
            I am highly interested in transforming raw data into meaningful insights,
            working with <span className="purple">Machine Learning, Time Series Forecasting,
            GenAI, and LLM-based applications</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Data Analysis & Visualization
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning & AI Models
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Data-Driven Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring GenAI & LLM Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Continuous Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "15px" }}>
            "Turning data into actionable insights that create real-world impact."
          </p>
          <footer className="blockquote-footer">Melbin M P</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
