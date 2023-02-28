import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function LogIn() {

  const [show, setShow] = useState(false);

  const handleLogIn = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id={"showLogInButton"} variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show}
             onHide={handleLogIn}
             backdrop="static"
             keyboard={false}>

        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3"
                        controlId="shiaFormEmailField">

              <Form.Label>Email address</Form.Label>
              <Form.Control  type="email"
                             placeholder="name@example.com"
                             autoFocus />

            </Form.Group>
            <Form.Group className="mb-3" controlId="shiaFormPasswordField">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogIn}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}