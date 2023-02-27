// import Table from 'react-bootstrap/Table';
// import { ShiaDefaultData } from "./../ShiaDefaultData.json"
import React from "react";
import Table from "react-bootstrap/Table";
import { InventoryDataParser } from "./InventoryDataParser";


export function Inventory() {

  const inventoryDataParser = new InventoryDataParser()

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
      {inventoryDataParser.getInventoryItems()}
      </tbody>
    </Table>
  );
}