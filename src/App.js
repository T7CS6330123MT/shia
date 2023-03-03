import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Authentication from "./Authentication/Authentication.js";
import NavBarHorizontal from "./Navigation/NavBarHorizontal.js";
import NavBarVertical from "./Navigation/NavBarVertical.js";


export default function App() {
  return (
    <div className="container-fluid App bg-dark row">
      <Authentication />
      <NavBarHorizontal />
      <div className={"row"}>
        <NavBarVertical />
        <Outlet />
      </div>
    </div>
  );
}
