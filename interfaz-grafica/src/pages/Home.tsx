import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button, Image } from "react-bootstrap";
import { useState } from "react";
import { ref, update } from "firebase/database";
import db from "../firebase";
import SmartImg from "../img/icono.png";

export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  console.log(isSwitchOn);
  const divStyle = {
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  };
  const itemStyle = { display: "grid", "place-items": "center" };
  const link = {
    display: "grid",
    "place-items": "center",
    width: "100%",
    color: "black",
    textDecoration: "none",
  };
  return (
    <div style={divStyle}>
      <div style={{ height: "20vh", display: "grid", justifyItems: "center" }}>
        <h1>
          <strong style={{ textShadow: "1px", color: "#F9F7F7" }}>
            Interfaz gráfica
          </strong>
        </h1>
        <Image
          fluid
          style={{ height: "15rem", width: "auto" }}
          src={SmartImg}
        ></Image>
      </div>
      <Container>
        <Row>
          <Col style={itemStyle}>
            <Link style={link} to="/tareas">
              <Button
                style={{
                  boxShadow: "3px 3px",
                  border: "none",
                  backgroundColor: "#3F72AF",
                  width: "50%",
                }}
              >
                <strong>Tareas</strong>
              </Button>
            </Link>
          </Col>
          <Col style={itemStyle}>
            <Link style={link} to="/cajas">
              <Button
                style={{
                  boxShadow: "3px 3px",
                  border: "none",
                  backgroundColor: "#3F72AF",
                  width: "50%",
                }}
              >
                <strong>Cajas</strong>
              </Button>
            </Link>
          </Col>
        </Row>
        <div
          style={{ marginTop: "3rem", display: "grid", placeItems: "center" }}
        >
          <Row>
            <Form>
              <Form.Check
                onChange={() => {
                  update(ref(db), { "/sector1/guardar": !isSwitchOn });
                  setIsSwitchOn(!isSwitchOn);
                }}
                checked={isSwitchOn}
                style={{ fontSize: "2rem" }}
                type="switch"
                id="custom-switch"
                label=""
              />
            </Form>
          </Row>
        </div>
      </Container>
    </div>
  );
}
