import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AddItem() {

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  const saveItem = () => {
    // save item to database
    // close modal
    closeModal();
  }

  return (
    <>
      <Button variant="primary" onClick={showModal}> Add Item </Button>
      <Modal show={show} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>Add Inventory Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="shiaFormEmailField">
              <Form.Label>Email address</Form.Label>
              <Form.Control  type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shiaFormUsernameField">
            <Form.Label>Username</Form.Label>
            <Form.Control  type="username" placeholder="johndoe" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shiaFormPasswordField">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shiaFormConfirmPasswordField">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={saveItem}>
            Save
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}