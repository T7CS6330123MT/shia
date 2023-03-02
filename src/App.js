import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarVertical } from "./Navigation/NavBarVertical.js";
import { NavBarHorizontal } from "./Navigation/NavBarHorizontal.js";
import { Outlet } from "react-router-dom";
import Authentication from "./Authentication/Authentication.js";

export default function App() {
  return (
    <div className="container-fluid App bg-dark row">
      <Authentication />
      <NavBarHorizontal />
      <div className={"row"} style={{margin:"0", padding:"0"}}>
        <NavBarVertical />
        <Outlet />
      </div>
    </div>
  );
}
