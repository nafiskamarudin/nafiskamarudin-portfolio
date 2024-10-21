import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/head-nafis.png";
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
              I started to learn more about data when i took the module Information Visualization during degree. 
              <br />
              <br />It is a baby step for me to become a data analyst/data scientist to
              <i>
                <b className="purple"> translate data into valuable and comprehensible insights </b>
              </i>
              <br />
              <br />
              My field of Interest's are : &nbsp;
              <i>
                <b className="purple">Web Development </b> which
               more focusing on{" "}
                <b className="purple">
                  Front-end Development
                </b>
              </i>
              <br />
              <br />
              Besides, i also want to become a <b className="purple">Data analyst </b>
              with specialized in Analyzing data. Results, trends and recommendations are clearly presented in reports or tools. 
              <br />
              <br />
              and also
              <i>
                <b className="purple">
                  {" "}
                  Data Analytics
                </b>
              </i>
              &nbsp; like
              <i>
                Get more value from the data with prediction models and machine learning techniques, for example by predicting behavior or targeting the right customer.
              </i>
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
                  href="https://github.com/nafiskamarudin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nafiskamarudin-917777236/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
