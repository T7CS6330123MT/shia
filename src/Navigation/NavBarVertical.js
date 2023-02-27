import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBarVertical.css";
import { NavBarVerticalLogo } from "./NavBarVerticalLogo";
import { NavLink } from "react-router-dom";

export function NavBarVertical() {
  return (
  <div className="container-fluid row ShiaNavBarVerticalContainer" >
      <div className="col-2">
        <NavBarVerticalLogo/>
        <Nav defaultActiveKey="/dashboard" className="flex-column ShiaNavBar">
          <NavLink className="ShiaNavBarVerticalLinks" to={"/dashboard"}>Dashboard</NavLink>
          <NavLink className="ShiaNavBarVerticalLinks" to={"/inventory"}>Inventory</NavLink>
          <NavLink className="ShiaNavBarVerticalLinks" to={"/notifications"}>Notifications</NavLink>
        </Nav>
      </div>
    </div>
  );
}