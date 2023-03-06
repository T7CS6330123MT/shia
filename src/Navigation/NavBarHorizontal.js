import "./NavBarHorizontal.css";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";
import LogOut from "./../Authentication/LogOut.js";
import { ReactComponent as UserIcon} from "./../Assets/UserIcon.svg";

export default function NavBarHorizontal() {

  let [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <Nav className={"justify-content-end NavBarHorizontal"} activeKey="/home">
        <NavDropdown className={"NavDropdown"} title={<UserIcon />} menuVariant={"dark"}>
          <NavDropdown.Item eventKey="4.1">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.2" onClick={showModal}>LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <LogOut show={show} closeModal={closeModal}/>
    </>
  );
}