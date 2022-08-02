import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Snowfalls from "../Snowflakes";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Snowfalls />
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", align: "center" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15}} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KAUSTUBH DESAI</strong>
              </h1>

              <div style={{ paddingLeft: 50, paddingTop: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
          <Snowfalls />
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
