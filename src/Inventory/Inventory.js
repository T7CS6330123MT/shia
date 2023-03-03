import React from "react";
import Table from "react-bootstrap/Table";
import DatastoreManager from "./DatastoreManager.js"
import DataParser from "./DataParser.js";

export default function Inventory() {

  const dataParser = new DataParser()
  const datastoreManager = new DatastoreManager()

  return (
    <>
      <Table bordered hover variant="dark" style={{width: "65%", margin: "0 auto auto 0", padding:"0"}}>
        <thead>
        <tr style={{border:"none"}}><th style={{border:"inherit"}}><h1 style={{display:"inline"}}>Inventory</h1></th></tr>
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