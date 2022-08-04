import { ParallaxLayer } from "@react-spring/parallax";
import { Col, Container, Row } from "react-bootstrap";
import SectionButton from "./SectionButton";

export default function SectionsMainPage() {
  const buttonStyle = {
    display: "grid",
    "place-items": "center",
  };

  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{ display: "grid", "place-items": "center" }}
      >
        <Container>
          <Row>
            <Col style={buttonStyle}>
              <SectionButton variant="outline-primary" text="¿Cómo funciona?" />
            </Col>
            <Col style={buttonStyle}>
              <SectionButton variant="outline-success" text="¿Quiénes somos?" />
            </Col>
          </Row>
          <Row>
            <Col style={buttonStyle}>
              <SectionButton variant="outline-light" text="Planos y circuitos" />
            </Col>
            <Col style={buttonStyle}>
              <SectionButton variant="outline-warning" text="Materiales" />
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </>
  );
}
