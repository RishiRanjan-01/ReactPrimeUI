import React from 'react'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Mainpage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: "20%", backgroundColor: "#1e1f2f", height: "100vh",paddingTop:"25px" }}
      >
        <Sidebar />
      </div>
      <div style={{ width: "80%", backgroundColor: "#2e323f" }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default Mainpage