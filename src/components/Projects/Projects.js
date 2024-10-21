import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/project1.png";
import bitsOfCode2 from "../../Assets/Projects/project2.png";
import bitsOfCode3 from "../../Assets/Projects/project3.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Portfolio"
              description="Develop using Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode2}
              isBlog={false}
              title="MHCsys"
              description="Healthcare Management system specifically for MY HEALTH CLINIC. Develop using HTML/CSS/PHP"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode3}
              isBlog={false}
              title="The Dentist"
              description="Dental Management system specifically for KLINIK PERGIGIAN THE DENTIST. Develop using HTML/CSS/PHP"
              demoLink=""
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
