import React, { memo } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const ProjectCards = ({
  imgPath = "/placeholder.png",
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
  techStack = [],
}) => {
  return (
    <Card className="project-card-view h-100">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} project preview`}
        loading="lazy"
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

        <div className="mt-auto d-flex gap-2">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
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
              aria-label="Live Demo"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

ProjectCards.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default memo(ProjectCards);
