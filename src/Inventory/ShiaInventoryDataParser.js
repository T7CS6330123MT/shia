import React from 'react';
import ShiaDefaultData from './../ShiaDefaultData.json';

export function ShiaInventoryDataParser(){

  const demoInventories = ShiaDefaultData.map(item => item["inventory"]);

  return(demoInventories[0].map(item => {
      return(
        <tr key={item["id"]}>
          <td>{item["id"]}</td>
          <td>{item["name"]}</td>
          <td>{item["category"]}</td>
          <td>{item["price"]}</td>
          <td>{item["quantity"]}</td>
          <td>{item["threshold"]}</td>
        </tr>
      );
    }
  ));
}