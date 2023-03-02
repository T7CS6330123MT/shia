import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";

export default function Authentication() {

  let authenticate = true

  let users = JSON.parse(sessionStorage.getItem("users"))

  if (users != null) {
    if (users.map(user => user["loggedIn"]).includes(true)) {
      authenticate = false
    }
  }

  const [show, setShow] = useState(authenticate);

  function closeModal() { setShow(false); }

  // const showModal = () => setShow(true);

  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please LogIn or SignUp in order to use Shia</p>
        </Modal.Body>
        <Modal.Footer>
          <LogIn parentClose={closeModal}/>
          <SignUp />
        </Modal.Footer>
      </Modal>
    </>
  );
}