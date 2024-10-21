import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Nafis Kamarudin </span>
            
            <br />
            I am currently looking for a job related to Data Analytics.
            <br />
            I have completed my <span className="purple">Bachelor (Hons) in Computer Science </span>on July 2023
            From UNIVERSITY OF NOTTINGHAM.
            <br />
            <br />
            I also hold a <span className="purple">Higher National Diploma (HND) in Computing (System Development) </span>
            from MARA PROFESSIONAL COLLEGE BERANANG,Selangor.

            <br /> 
            <br /> Here are my interest after i completed my degree and has been exposed to IT World
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Front-end Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Designer
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Analyst
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Science
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designer 
            </li>
          </ul>

          <p style={{ color: "rgb(255 206 27)" }}>
            "Solve the problem first, Then write the code"{" "}
          </p>
          <footer className="blockquote-footer">John Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
