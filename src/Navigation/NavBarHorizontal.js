import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import LogOut from "./../Authentication/LogOut.js";
import "./NavBarHorizontal.css";
import { useState } from "react";

export function NavBarHorizontal() {

  let [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <Nav className="justify-content-end" style={{height:"48px", margin:"0", padding:"0"}} activeKey="/home">
        <NavDropdown title={<ShiaNavBarHorizontalUserIcon />} id="nav-dropdown" menuVariant={"dark"} style={{caretColor:"whitesmoke", margin:"8px", color:"whitesmoke"}}>
          <NavDropdown.Item eventKey="4.1">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.2" onClick={showModal}>LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <LogOut show={show} closeModal={closeModal}/>
    </>
  );
}

export function ShiaNavBarHorizontalUserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width="32"
         height="32"
         fill="whitesmoke"
         className="bi bi-person-circle"
         viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg>
  );
}