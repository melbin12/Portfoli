import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Grower-Django"
              description="Grower is a revolutionary project aiming to transform the agricultural sector by introducing a
              computerized approach to purchasing pesticide products nationwide.Front End - HTML, CSS, JavaScript. Backend - Python Django, SQLite 3 above. Technologies - E-mail verification
              Machine Learning-Plant Disease Prediction, selenium,Product report."
              ghLink="https://github.com/melbin12/Main_Project"
              demoLink="https://www.pythonanywhere.com/user/growerpest/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Grower-React"
              description="Grower is clearly beginning to have a major impact on the agricultural sector. The way people go about
              purchasing pesticide products is of great concern. Front End - React. Backend - Node.js, Mongo DB. Technologies used - JS, HTML5, CSS, Express.js
              "
              ghLink="https://github.com/melbin12/grower"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/melbin12/Main_Project/tree/main/predict"
              demoLink="https://www.pythonanywhere.com/user/growerpest/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fly-High"
              description="just for travel web Demo used in HTML,Bootstrap,css,JavaScript"
              ghLink="https://github.com/melbin12/TravelProjectorg"
              demoLink="https://cheery-pika-68c06d.netlify.app//"              
            />
          </Col>

        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
