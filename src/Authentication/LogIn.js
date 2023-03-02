import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function LogIn(props) {

  let pwd = ""
  let email = ""

  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  const authenticate = () => {
    // authenticate user
    // This needs to be changed to a fetch request to the backend
    sessionStorage.setItem("users", JSON.stringify([{ "email": email, "password": pwd, "loggedIn": true}]))

    // close modal
    closeModal();

    // close parent modal
    props.parentClose();
  }

  const onChangePwd = (e) => {
    pwd = e.target.value
  }

  const onChangeEmail = (e) => {
    email = e.target.value
  }

 return (
   <>
     <Button variant="primary" onClick={showModal}>LogIn</Button>
     <Modal show={show}
            backdrop="static"
            keyboard={false}>

       <Modal.Header>
         <Modal.Title>LogIn</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form>
           <Form.Group className="mb-3"
                       controlId="shiaFormEmailField">

             <Form.Label>Email address</Form.Label>
             <Form.Control type="email"
                           placeholder="name@example.com"
                           autoFocus onChange={onChangeEmail} />

           </Form.Group>
           <Form.Group className="mb-3" controlId="shiaFormPasswordField">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" onChange={onChangePwd}/>
           </Form.Group>
         </Form>
       </Modal.Body>
       <Modal.Footer>
         Don't have an account yet? Just go back and select to "SignUp" instead...
         <Button variant="secondary" onClick={closeModal}>Back</Button>
         <Button variant="primary" onClick={authenticate}>Login</Button>
       </Modal.Footer>
     </Modal>
   </>
 );
}