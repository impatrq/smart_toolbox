import Container from "react-bootstrap/Container";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ref, update, onValue } from "firebase/database";
import { ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import db from "./firebase";

export default function Home() {
  const [operarios, setOperarios] = useState<String[]>([]);
  const [operario, setOperario] = useState<String>();
  const [tareas, setTareas] = useState<Object[]>([]);
  useEffect(() => {
    const personasRef = ref(db, "sector1/personas");
    onValue(personasRef, (snapshot) => {
      const raw_data = snapshot.val();
      setOperarios(Object.keys(raw_data));
      setTareas(raw_data);
    });
  }, []);
  const divStyle = {
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "grid",
    "place-items": "center",
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
      <div style={{ display: "grid", placeItems: "center" }}>
        <h2>
          Añadir tareas para <strong>{operario}</strong>
        </h2>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="success"
          menuVariant="dark"
          title="Elegir un operario"
          className="mt-2"
          size="lg"
          drop="end"
          style={{ marginBottom: "1rem" }}
        >
          {operarios?.map((i, index) => (
            <Dropdown.Item
              onClick={(e) => setOperario(e.target["innerHTML"])}
              key={index}
              as="button"
            >
              {i}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Container>
          <ListGroup as="ol" numbered style={{marginBottom:"3rem"}}>
            {tareas[`${operario}`]?.tareas
              ?.split(/\|/gi)
              ?.map((i: String) => i.replace(/^\s+|\s+$/gi, ""))
              ?.map((i, index) => (
                <ListGroup.Item as="li" key={index}>
                  {i}
                </ListGroup.Item>
              ))}
          </ListGroup>
          <Form.Label>
            Añadir Tareas para <strong>{operario}</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={`Ingrese una tarea para ${operario}`}
          />
        </Container>
      </div>
    </div>
  );
}
