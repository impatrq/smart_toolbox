import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import Table from "react-bootstrap/Table";
import db from "../firebase";
import HomeButton from "../components/HomeButton";
import AddToolboxModal from "../components/AddToolboxModal";

export default function Caja() {
  const [cajasArray, setCajasArray] = useState<Object[]>([]);
  const [personasArray, setPersonasArray] = useState<Object[]>([]);
  useEffect(() => {
    const cajasRef = ref(db, "sector1/cajas");
    onValue(cajasRef, (snapshot) => {
      const raw_data = snapshot.val();
      const result = Object.keys(raw_data).map((key) => ({
        [key]: raw_data[key],
      }));
      setCajasArray(result);
    });
    const personasRef = ref(db, "sector1/personas");
    onValue(personasRef, (snapshot) => {
      const raw_data = snapshot.val();
      const result2 = Object.keys(raw_data).map((key) => ({
        [key]: raw_data[key],
      }));
      setPersonasArray(result2);
    });
  }, []);

  console.log();

  const divStyle = {
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "grid",
    "place-items": "center",
  };
  return (
    <div style={divStyle}>
      <HomeButton />
      <div style={{ display: "grid", placeItems: "center" }}>
        <h2 style={{ color: "#F9F7F7", marginBottom: "1rem" }}>
          Cajas de este sector
        </h2>
        <AddToolboxModal />
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Caja</th>
                <th>Estado</th>
                <th>Operario</th>
                <th>Herramientas faltantes</th>
              </tr>
            </thead>
            <tbody>
              {cajasArray.map((caja, key) => (
                <tr key={key}>
                  <td>{Object.keys(caja)}</td>
                  <td>
                    {caja[`${Object.keys(caja)}`]["state"]
                      ? "Encendida"
                      : "Apagada"}
                  </td>
                  <td>
                    {personasArray
                      .filter((i) =>
                        Object.values(i)[0]["caja"] ===
                          Number(Object.keys(caja))
                          ? true
                          : false
                      )
                      .map((a) => Object.keys(a)[0])
                      .join(", ")}
                  </td>
                  <td>
                    {caja[`${Object.keys(caja)}`]["missing_tools"]
                      .split(/\|/gi)
                      .map((i: String) => i.replace(/^\s+|\s+$/gi, ""))
                      .join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}
