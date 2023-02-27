// import Table from 'react-bootstrap/Table';
// import { ShiaDefaultData } from "./../ShiaDefaultData.json"
import React from "react";
import Table from "react-bootstrap/Table";
import DatastoreManager from "./DatastoreManager.js"
import { DataParser } from "./DataParser";


export function Inventory() {

  const dataParser = new DataParser()
  const datastoreManager = new DatastoreManager()

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
      {dataParser.parseInventoryData(datastoreManager.getDemoItems())}
      </tbody>
    </Table>
  );
}