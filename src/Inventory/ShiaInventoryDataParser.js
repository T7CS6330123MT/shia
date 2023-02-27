import React from 'react';
import Table from 'react-bootstrap/Table';
import ShiaDefaultData from './../ShiaDefaultData.json';

export function ShiaInventoryDataParser(){

  const inventories = ShiaDefaultData.map((item) => {
    return item["inventory"];
  });

  const shiaData=inventories[0].map( (item) => {
      return(
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.threshold}</td>
      </tr>
      );
    }
  );

  return(
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
        {shiaData}
        </tbody>
      </Table>
  );
}