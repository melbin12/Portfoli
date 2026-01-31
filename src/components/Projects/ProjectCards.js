import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
  techStack = [],
}) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img
        variant="top"
        src={imgPath || "/placeholder.png"}
        alt={`${title} preview`}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {techStack.length > 0 && (
          <Card.Text>
            <strong>Tech Stack:</strong> {techStack.join(", ")}
          </Card.Text>
        )}

        <div className="mt-auto">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!isBlog && demoLink && (
            <Button
              variant="secondary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCards;
