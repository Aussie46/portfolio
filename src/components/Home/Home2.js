import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Particle />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started my professional career as a researcher. Not as a Computer Scientist, but as a <b className="purple"> Computational Chemist! </b>
              <br />
              <br /> While doing research, I fell in love with programming and learned 
              <i>
                <b className="purple"> Matlab, Python </b>  
              </i>
              and
              <i>
                <b className="purple"> C++ </b>  
              </i>
              <br />
              <br />
              Later, I got addicted to Graphic Designing and learnt softwares like 
              <i>
                <b className="purple"> Adobe Photoshop, Illustrator, Premiere Pro </b> 
              </i>
              and <i>
                <b className="purple"> OpenToonz </b> 
              </i>
              for 2D Animation
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              I always try to look for opportunities where I could show my skills.
              <br />
              
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
                  href="https://twitter.com/Kaustub40488048"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaustubh-desai-a1aa40186/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aussie_0072/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.facebook.com/kaustubh.desai.712"
                target="_blank" 
                rel="noopener noreferrer"
                className = "icon-colour home-social-icons"
              >
                <AiOutlineFacebook />
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
