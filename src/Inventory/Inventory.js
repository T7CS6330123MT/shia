import React from "react";
import Table from "react-bootstrap/Table";
import DatabaseManager from "./DatabaseManager.js"
import InventoryParser from "./InventoryParser.js";

export default function Inventory() {

  const parser = new InventoryParser()
  const dbm = new DatabaseManager()

  return (
    <>
      <Table bordered hover variant="dark" style={{width: "65%", margin: "0 auto auto 0", padding:"0"}}>
        <thead>
        <tr style={{border:"none"}}><th style={{border:"inherit"}}><h1 style={{display:"inline"}}>Inventory</h1></th></tr>
        <tr>
          <th className={"w-25"}>id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Threshold</th>
        </tr>
        </thead>
        <tbody>
        {parser.parseInventoryData(dbm.getItems())}
        </tbody>
      </Table>
    </>
  );
}