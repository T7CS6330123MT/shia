import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBarVertical.css";
import { NavBarVerticalLogo } from "./NavBarVerticalLogo.js";
import { NavLink } from "react-router-dom";
import React from "react";
import { ReactComponent as DashboardIcon} from "../Assets/DashboardIcon.svg";
import { ReactComponent as SummaryIcon} from "../Assets/SummaryIcon.svg";
import { ReactComponent as NotificationsIcon} from "../Assets/NotificationsIcon.svg";

export default function NavBarVertical() {
  return (
    <div className="ShiaNavBarVerticalContainer col-2">
      <NavBarVerticalLogo />
      <Nav defaultActiveKey="/dashboard" className="flex-column ShiaNavBar pt-5">
        <NavLink className="ShiaNavBarVerticalLinks pb-3" to={"/dashboard"}>
          <DashboardIcon style={{width:"24px", height:"24px", marginRight:"8px"}}/> Dashboard
        </NavLink>
        <NavLink className="ShiaNavBarVerticalLinks pb-3" to={"/inventory"}>
          <SummaryIcon style={{width:"24px", height:"24px", marginRight:"8px"}}/> Inventory
        </NavLink>
        <NavLink className="ShiaNavBarVerticalLinks" to={"/notifications"}>
          <NotificationsIcon style={{width:"24px", height:"24px", marginRight:"8px"}}/> Notifications
        </NavLink>
      </Nav>
    </div>
  );
}