import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.js";
import reportWebVitals from "./reportWebVitals.js";
import ErrorPage from "./error-page.js";
import Inventory from "./Inventory/Inventory.js";
import Notifications from "./Notifications/Notifications.js"



const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
