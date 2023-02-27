import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarVertical } from "./Navigation/NavBarVertical.js";
import { NavBarHorizontal } from "./Navigation/NavBarHorizontal.js";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid App bg-dark">
      <NavBarHorizontal/>
      <NavBarVertical/>
      <Outlet />
    </div>
  );
}
