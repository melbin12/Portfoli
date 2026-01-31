import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import wether from "../../Assets/Projects/wetherIm.png";
import simpl from "../../Assets/Projects/simp.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projects = [
  {
    imgPath: bitsOfCode,
    title: "Grower – React",
    description:
      "Grower is impacting the agricultural sector by simplifying pesticide purchasing. Frontend built with React and backend using Node.js and MongoDB. Technologies include HTML5, CSS, JavaScript, and Express.js.",
    ghLink: "https://github.com/melbin12/grower",
    demoLink:
      "https://65322d453cc9eb71533aaf3e--verdant-entremet-87137e.netlify.app/",
  },
  {
    imgPath: chatify,
    title: "Grower – Django",
    description:
      "A nationwide agricultural solution using Django. Frontend with HTML, CSS, JavaScript; backend with Python Django and SQLite. Includes email verification, plant disease prediction using ML, Selenium automation, and product reporting.",
    ghLink: "https://github.com/melbin12/Main_Project",
    demoLink: "https://www.pythonanywhere.com/user/growerpest/",
  },
  {
    imgPath: leaf,
    title: "Plant AI",
    description:
      "Plant disease detection system using PyTorch, CNN, and Transfer Learning. Trained on Kaggle dataset with 38 classes across 14 plants. Achieved 98% accuracy using a ResNet34 pretrained model.",
    ghLink: "https://github.com/melbin12/Main_Project/tree/main/predict",
    demoLink: "https://www.pythonanywhere.com/user/growerpest/",
  },
  {
    imgPath: simpl,
    title: "Simple Interest (React)",
    description:
      "A simple React-based application to calculate simple interest, focusing on component structure, state handling, and clean UI design.",
    ghLink:
      "https://github.com/melbin12/React_Basics/tree/main/simple-intrest",
    demoLink:
      "https://6531f7735230994ce772610e--incredible-khapse-0a8e98.netlify.app/",
  },
  {
    imgPath: wether,
    title: "Weather Forecast",
    description:
      "A real-time weather forecasting web application using HTML, CSS, Bootstrap, JavaScript, and AJAX to fetch live weather data from external APIs.",
    ghLink: "https://github.com/melbin12/Weather",
    demoLink: "https://verdant-begonia-075fc7.netlify.app/",
  },
  {
    imgPath: editor,
    title: "Fly High",
    description:
      "A travel adventure website designed to inspire users in planning trips. Built using HTML, CSS, Bootstrap, and JavaScript with an engaging UI.",
    ghLink: "https://github.com/melbin12/TravelProjectorg",
    demoLink: "https://cheery-pika-68c06d.netlify.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
