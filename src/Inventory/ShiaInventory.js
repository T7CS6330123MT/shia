// import Table from 'react-bootstrap/Table';
// import { ShiaDefaultData } from "./../ShiaDefaultData.json"
import { ShiaInventoryDataParser } from "./ShiaInventoryDataParser";
import Table from "react-bootstrap/Table";
import React from "react";

export function ShiaInventory() {

  return (
    <Table striped bordered hover variant="dark" style={{ width: "65%", marginLeft: "250px"}}>
      <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Threshold</th>
      </tr>
      </thead>
      <tbody>
      <ShiaInventoryDataParser/>
      </tbody>
    </Table>
  );
}