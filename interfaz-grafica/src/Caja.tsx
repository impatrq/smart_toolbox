import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import Table from "react-bootstrap/Table";
import db from "./firebase";

export default function Caja() {
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
                <h2 style={{ marginBottom: "3rem" }}>
                    Cajas de este sector
                </h2>
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
                    </Table>
                </Container>
            </div>
        </div>
    );
}
