import React from "react";
import "./Sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container2">
      <div className="profile">
        <div className="doc-info">
          <h3>Inventory Manager</h3>
        </div>
      </div>
      <div className="buttons">
        <div className="db-btn">
          <button>Home</button>
        </div>
        <div className="db-btn">
          <button>Logout</button>
        </div>
      </div>
      <div className="inventory-manager">
        <button>
          <BsFillPersonFill size={22} style={{ color: "black" }} />
          <Link to="/" className="heading">
            <h3>Inventory Manager</h3>
          </Link>
        </button>
      </div>
      <div className="inventory-manager">
        <button>
          <AiOutlineShoppingCart size={22} style={{ color: "black" }} />
          <Link to="/orderqueue" className="heading">
            <h3>Order Queue</h3>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
