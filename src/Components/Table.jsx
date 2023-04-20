import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { ProductService } from "./../service/ProductService";
import "./sidebar.css";

const Table = () => {
  let data = ProductService.getProductsData().slice(0, 5);
  const [products, setProducts] = useState([...data]);

  const columns = [
    { field: "code", header: "Client" },
    { field: "name", header: "Head" },
    { field: "quantity", header: "April" },
    { field: "quantity", header: "Mar" },
    { field: "quantity", header: "Feb" },
    { field: "quantity", header: "Jan" },
    { field: "quantity", header: "Dec" },
    { field: "quantity", header: "Nov" },
    { field: "quantity", header: "Total" },
  ];
  const april = () => {
    let total = 0;
    for (let product of products) {
      total += product.quantity;
    }
    return total;
  };
  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column
          footer="Total:"
          colSpan={2}
          footerStyle={{ textAlign: "left" }}
        />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
        <Column footer={april} style={{ textAlign: "right" }} />
      </Row>
    </ColumnGroup>
  );
  return (
    <div className="card" style={{ margin: "25px" }}>
      <DataTable
        value={products}
        footerColumnGroup={footerGroup}
        tableStyle={{ minWidth: "50rem" }}
      >
        {columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            style={{ textAlign: col.field == "quantity" ? "right" : "left" }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default Table;
