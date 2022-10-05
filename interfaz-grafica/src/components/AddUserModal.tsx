import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ref, update } from "firebase/database";
import db from "../firebase";

function AddUserModal() {
    const [show, setShow] = useState(false);
    const [newUser, setNewUser] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddUser = () => {
        const key = `/sector1/personas/${newUser}`;
        update(ref(db), { [key]: { caja: 0, tareas: "" } });
        handleClose();
    };

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Añadir nuevo operario
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir operario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre y apellido del operario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Operario..."
                                autoFocus
                                onChange={(e) => { setNewUser(e.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleAddUser}>
                        Subir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUserModal