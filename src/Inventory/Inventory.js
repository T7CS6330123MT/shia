import React from "react";
import Table from "react-bootstrap/Table";
import DatastoreManager from "./DatastoreManager.js"
import DataParser from "./DataParser.js";


export default function Inventory() {

  const dataParser = new DataParser()
  const datastoreManager = new DatastoreManager()

  return (
    <>
      <Table bordered hover variant="dark" style={{ width: "65%", marginLeft: "250px", marginTop: "-100px"}}>
        <thead>
        <tr style={{border:"none"}}><th style={{border:"none"}}><h1>Inventory</h1></th></tr>
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
    </>
  );
}