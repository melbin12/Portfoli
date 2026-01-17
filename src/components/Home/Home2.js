import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for data science and analytics while exploring 
              patterns in everyday life. I believe in transforming raw data into 
              meaningful insights that drive decisions 🤔
              <br />
              <br />
              I am proficient in essential data tools like
              <i>
                <b className="purple"> Python | R | SQL | Excel | Tableau | Power BI </b>
              </i>
              <br />
              <br />
              My field of interest focuses on &nbsp;
              <i>
                <b className="purple">Data Analysis and Visualization </b> 
                and exploring areas in{" "}
                <b className="purple">
                  Machine Learning and Predictive Analytics.
                </b>
              </i>
              <br />
              <br />
              I enjoy working with data manipulation libraries such as 
              <b className="purple"> Pandas, NumPy, </b> and
              <i>
                <b className="purple">
                  {" "}
                  Data Visualization Tools
                </b>
              </i>
              &nbsp; including
              <i>
                <b className="purple"> Matplotlib, Seaborn, and Plotly</b>
              </i>
              <br />
              <br />
              Currently exploring statistical analysis, hypothesis testing, and 
              building my first predictive models while continuously learning 
              about data ethics and best practices in the field.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/melbin12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MelbinMp73798"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/melbin-mp-470011212/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/melbin707/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;