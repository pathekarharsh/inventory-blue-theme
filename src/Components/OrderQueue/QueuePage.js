import React from "react";
import "./QueuePage.css";
import { Link } from "react-router-dom";

const orders = [
  {
    orderNumber: "12345",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    orderNumber: "23456",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    orderNumber: "34567",
    details:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    orderNumber: "12243",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    orderNumber: "23324",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    orderNumber: "86767",
    details:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    orderNumber: "89790",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    orderNumber: "54333",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    orderNumber: "35635",
    details:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const QueuePage = () => {
  return (
    <div className="queue-page">
      <h1>Order Queue</h1>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.orderNumber} className="order-card">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <Link to="/orderassign" className="update-button">
              Assign
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueuePage;
