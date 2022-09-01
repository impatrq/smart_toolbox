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
        speed={1.3}
        className="grid place-items-center"
      >
        <Container>
          <Row>
            <Col className="mx-2" style={buttonStyle}>
              <SectionButton
                variant="outline-primary"
                text="¿Cómo funciona?"
                link={"/funcionamiento"}
              />
            </Col>
            <Col className="mx-2" style={buttonStyle}>
              <SectionButton
                variant="outline-success"
                text="¿Quiénes somos?"
                link={"/nosotros"}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-2" style={buttonStyle}>
              <SectionButton
                variant="outline-light"
                text="Planos y circuitos"
                link={"/circuitos"}
              />
            </Col>
            <Col className="mx-2" style={buttonStyle}>
              <SectionButton
                variant="outline-warning"
                text="Imágenes"
                link={"/imagenes"}
              />
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </>
  );
}
