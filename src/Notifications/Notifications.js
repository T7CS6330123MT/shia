import React from "react";
import Table from "react-bootstrap/Table";
import { ReactComponent as WarningIcon} from "../Assets/WarningIcon.svg";
import { ReactComponent as OutstockIcon} from "../Assets/OutstockIcon.svg";
// import DatabaseManager from "./DatabaseManager.js"
// import InventoryParser from "./InventoryParser.js";


export default function Inventory() {

  // const dataParser = new InventoryParser()
  // const datastoreManager = new DatabaseManager()

  return (
    <>
      <Table striped bordered hover variant="dark" style={{width: "65%", margin: "0 auto auto 0", padding:"0"}}>
        <thead>
        <tr style={{border:"none"}}>
          <th style={{border:"inherit"}}><h1 style={{ display:"inline"}}>Notifications</h1></th>
        </tr>
        <tr>
          <th className={"w-25"}>Type</th>
          <th>Message</th>
        </tr>
        </thead>
        <tbody>
        <tr key={0}>
          <td><WarningIcon style={{width:"32px", height:"32px", margin: "8px"}}/>️</td>
          <td>Tide low stock alert</td>
        </tr>
        <tr key={1}>
          <td><WarningIcon style={{width:"32px", height:"32px", margin: "8px"}}/>️</td>
          <td>Pinesol low stock alert</td>
        </tr>
        <tr key={2}>
          <td><OutstockIcon style={{width:"32px", height:"32px", margin: "8px"}}/>️</td>
          <td>Bread low out of stock alert</td>
        </tr>
        </tbody>
      </Table>
    </>
  );
}