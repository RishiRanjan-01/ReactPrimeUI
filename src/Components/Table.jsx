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
const headetStyle={textAlign:"right"}
  const columns = [
    { field: "code", header: "Client" ,style:{textAlign:"left"}},
    { field: "name", header: "Head",style:{textAlign:"left"} },
    { field: "quantity", header: "April",style:{textAlign:"right"} },
    { field: "quantity", header: "Mar",style:{textAlign:"right"} },
    { field: "quantity", header: "Feb",style:{textAlign:"right"} },
    { field: "quantity", header: "Jan" ,style:{textAlign:"right"}},
    { field: "quantity", header: "Dec",style:{textAlign:"right"} },
    { field: "quantity", header: "Nov",style:{textAlign:"right"} },
    { field: "quantity", header: "Total" ,style:{textAlign:"right"}},
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
            // style={col.style}
            style={{
              textAlign: col.field == "quantity" ? "right" : null,
              paddingLeft: col.field == "quantity" ? "50px" : null,
            }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default Table;
