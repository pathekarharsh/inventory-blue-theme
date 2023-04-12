import React from "react";
import "./Header.css";
import { AiOutlineBars } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Inventory/Stock</h1>
      <div className="side">
          <AiOutlineBars size={30} style={{ color: "black" }} />
        </div>
    </div>
  );
}

export default Navbar;
