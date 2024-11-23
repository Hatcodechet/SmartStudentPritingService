// App.js
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import LoginSignup from "./components/LoginSignup";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <LoginSignup />
      </div>
    </div>
  );
}

export default App;
