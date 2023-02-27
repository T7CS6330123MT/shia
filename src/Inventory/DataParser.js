import React from 'react';

export class DataParser {
  parseInventoryData(data) {
    return (data[0].map(item => {
        return (
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
}