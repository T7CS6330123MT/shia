import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBarVertical.css";
import { NavBarVerticalLogo } from "./NavBarVerticalLogo.js";
import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBarVertical() {
  return (
    <div className="ShiaNavBarVerticalContainer col-2">
      <NavBarVerticalLogo />
      <Nav defaultActiveKey="/dashboard" className="flex-column ShiaNavBar h-100">
        <NavLink className="ShiaNavBarVerticalLinks" to={"/dashboard"}>Dashboard</NavLink>
        <NavLink className="ShiaNavBarVerticalLinks" to={"/inventory"}>Inventory</NavLink>
        <NavLink className="ShiaNavBarVerticalLinks" to={"/notifications"}>Notifications</NavLink>
      </Nav>
    </div>
  );
}