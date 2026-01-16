import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Melbin M P </span>
            from  <span className="purple"> Kerala, India.</span>
            <br /> 
            I completed my Masters in Computer Aplication (MCA) from Amal jyothi collegr of engineering.
            <br />
            Additionally, I am currently Intern as a software developer at
            MERN.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> watching movie Try to Acting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Melbin M P</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
