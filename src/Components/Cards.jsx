import React from "react";

import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

let data = [
  {
    name: "Direct Cost",
    bg: "red",
    text1: "0.6",
    text2: "0.81",
    image:
      "https://www.primefaces.org/atlantis-react/assets/layout/images/dashboard/rate.svg",
  },
  {
    name: "Revenue",
    bg: "green",
    text1: "4,2",
    text2: "306.2",
    image:
      "https://www.primefaces.org/atlantis-react/assets/layout/images/dashboard/value.svg",
  },
  {
    name: "Invoice",
    bg: "blue",
    text1: "-2.1",
    text2: "1,602",
    image:
      "https://www.primefaces.org/atlantis-react/assets/layout/images/dashboard/quantity.svg",
  },
];
const Cards = () => {
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }}
    >
      {data.map((el) => {
        return (
          <div
            style={{
              width: "30%",
              height: "80px",
              display: "flex",
              backgroundColor: "#2b2c3b",
              borderRadius: "10px",
            }}
          >
            <div style={{ width: "55%", color: "white", padding: "5px" }}>
              <div>
                <p style={{ margin: "5px", textAlign: "left" }}>{el.name}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <Tag icon="pi pi-arrow-up" value={el.text1}>
                    %
                  </Tag>
                </div>
                <div>
                  <h2 style={{ margin: "0px" }}>{el.text2}%</h2>
                </div>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
