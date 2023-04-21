import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import "./sidebar.css";
const Sidebar = () => {
  const menu = [
    {
      label: "Revenue",
      icon: "pi pi-dollar",
    },
    {
      label: "Invoice",
      icon: "pi pi-file",
    },
    {
      label: "Direct Cost",
      icon: "pi pi-at",
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <PanelMenu model={menu} />
    </div>
  );
};

export default Sidebar;
