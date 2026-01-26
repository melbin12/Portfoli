import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Particle from "../Particle";
import resumePDF from "../../Assets/MelbinMP.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Reusable Download Button
const DownloadButton = () => (
  <Row className="justify-content-center my-4">
    <Button
      variant="primary"
      href={resumePDF}
      target="_blank"
      rel="noreferrer"
      className="resume-download-btn"
    >
      <AiOutlineDownload className="me-2" />
      Download CV
    </Button>
  </Row>
);

function ResumeNew() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = screenWidth > 786 ? 1.7 : 0.6;

  return (
    <Container fluid className="resume-section">
      <Particle />

      <DownloadButton />

      <Row className="resume justify-content-center">
        <Document file={resumePDF}>
          <Page pageNumber={1} scale={scale} />
        </Document>
      </Row>

      <DownloadButton />
    </Container>
  );
}

export default ResumeNew;
