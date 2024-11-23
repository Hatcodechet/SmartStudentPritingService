// Sidebar.js
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Smart Student Printing Service</h2>
      <ul>
        <li>
          <button>+ New Print</button>
        </li>
        <li>Home</li>
        <li>Printing</li>
        <ul>
          <li>Printer List</li>
          <li>Print History</li>
        </ul>
        <li>Storage</li>
        <ul>
          <li>My Files</li>
          <li>Integrations</li>
        </ul>
        <li>Accounts</li>
        <ul>
          <li>MyBK</li>
          <li>Payments</li>
          <li>Settings</li>
        </ul>
        <li>Help</li>
        <ul>
          <li>Help Center</li>
          <li>Feedback</li>
        </ul>
      </ul>
    </div>
  );
}

export default Sidebar;
