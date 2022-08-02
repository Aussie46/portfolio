import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello visitors! You must be wondering, who is <span className="purple"><strong>Kaustubh Desai.</strong> </span>
            He is a 2022 B.E. Chemical student from <span className="purple"><strong>BITS Pilani University. </strong></span>
            He was born and brought up in <span className="pu rple"><strong>Mumbai, India. </strong></span>
            He has worked in <span className="purple"><strong>Indian Institute of Science, Bengaluru</strong></span>, No.1 Institute of India. 
            He has done research in <span className="purple"><strong>Microfluidics</strong></span> and <span className="purple"><strong>Lattice Boltzmann Method</strong></span>, a computational technique that incorporates both micro and macro properties of the phenomena.
            <br/>
            <br />
            Besides his usual work, he loves to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket and Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Binging Web Series and Sitcoms
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "This is how I will be remembered!"{" "}
          </p>
          <footer className="blockquote-footer">Kaustubh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
