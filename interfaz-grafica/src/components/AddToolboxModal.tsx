import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ref, update } from "firebase/database";
import db from "../firebase";

function AddToolboxModal() {
    const [show, setShow] = useState(false);
    const [newBox, setNewBox] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddUser = () => {
        const key = `/sector1/cajas/${newBox}`;
        update(ref(db), { [key]: { missing_tools: "", state: false } });
        handleClose();
    };

    return (
        <>
            <Button variant="light" onClick={handleShow} style={{marginBottom:"1rem"}}>
                Añadir nueva Smart Toolbox
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir una Smart Toolbox al sistema</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Número del QR de la Smart Toolbox</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Smart Toolbox..."
                                autoFocus
                                onChange={(e) => { setNewBox(e.target.value) }}
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

export default AddToolboxModal