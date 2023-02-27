import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShiaNavBarVertical } from "./Navigation/ShiaNavBarVertical.js";
import { ShiaNavBarHorizontal } from "./Navigation/ShiaNavBarHorizontal.js";
import { Inventory } from "./Inventory/Inventory.js";

export default function App() {
  return (
    <div className="container-fluid App bg-dark">
      <ShiaNavBarHorizontal/>
      <ShiaNavBarVertical/>
      <Inventory/>
    </div>
  );
}
