import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ShiaNavBarVertical.css";
import { ShiaNavBarVerticalLogo } from "./ShiaNavBarVerticalLogo";

export function ShiaNavBarVertical() {
  return (
  <div className="container-fluid row ShiaNavBarVerticalContainer" >
      <div className="col-2">
        <ShiaNavBarVerticalLogo/>
        <Nav defaultActiveKey="/home" className="flex-column ShiaNavBar">
          <Nav.Link className="ShiaNavBarVerticalLinks" href="/home">Inventory</Nav.Link>
          <Nav.Link className="ShiaNavBarVerticalLinks" href="/notifications" eventKey="notifications">Notifications</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}