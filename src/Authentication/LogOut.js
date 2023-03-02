import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function LogOut(props) {

  const deAuthenticate = () => {
    // authenticate user
    // This needs to be changed to a fetch request to the backend
    sessionStorage.clear()

    // close modal
    props.closeModal();
  }

  return (
    <>
      <Modal show={props.show}
             onHide={props.closeModal}
             backdrop="static"
             keyboard={false}>

        <Modal.Header closeButton={true}>
          <Modal.Title>LogOut?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to LogOut?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deAuthenticate}>LogOut</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}