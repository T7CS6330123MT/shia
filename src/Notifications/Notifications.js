import React from "react";
import Table from "react-bootstrap/Table";
// import DatastoreManager from "./DatastoreManager.js"
// import DataParser from "./DataParser.js";


export default function Inventory() {

  // const dataParser = new DataParser()
  // const datastoreManager = new DatastoreManager()

  return (
    <div>
      <Table striped bordered hover variant="dark" style={{ width: "65%", marginLeft: "250px"}}>
        <thead>
        <tr>
          <th><h1>Notifications</h1></th>
        </tr>
        </thead>
        <tbody>
        <tr key={0}>
          <td><div>⚠️ Coca Cola low stock alert</div></td>
        </tr>
        <tr key={1}>
          <td><div>⚠️ Tide low stock alert</div></td>
        </tr>
        <tr key={2}>
          <td><div>⚠️ Pasta low stock alert</div></td>
        </tr>
        <tr key={3}>
          <td><div>⚠️ Clorox low stock alert</div></td>
        </tr>
        <tr key={4}>
          <td><div>❌️ Coca Cola out of stock alert</div></td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
}