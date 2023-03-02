import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function SignUp() {

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  const authenticate = () => {
    // authenticate user
    // close modal
    closeModal();
  }

  return (
    <>
      <Button variant="primary" onClick={showModal}>SignUp</Button>
      <Modal show={show} backdrop="static" keyboard={false}>

        <Modal.Header>
          <Modal.Title>Create Account</Modal.Title>
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

            <Form.Group className="mb-3" controlId="shiaFormNameField">
              <Form.Label>Name</Form.Label>
              <Form.Control  type="name" placeholder="John Doe" autoFocus />
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
          Already have an account? just go back and select to "LogIn" instead...
          <Button variant={"secondary"} onClick={closeModal}>Back</Button>
          <Button variant={"primary"} onClick={authenticate}>SignUp</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}