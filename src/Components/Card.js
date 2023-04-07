import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, quantity, image }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-quantity">{quantity}Kg in stock</p>
        <Link to="/Update" className="heading">
          <button className="update-button">Update Stock</button>
        </Link>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    title: "Tomato",
    quantity: "10",
  },
  {
    id: 2,
    title: "Potato",
    quantity: "30",
  },
  {
    id: 3,
    title: "Apple",
    quantity: "5",
  },
  {
    id: 4,
    title: "Onion",
    quantity: "15",
  },
  {
    id: 5,
    title: "Carrot",
    quantity: "12",
  },
  {
    id: 1,
    title: "Tomato",
    quantity: "10",
  },
  {
    id: 2,
    title: "Potato",
    quantity: "30",
  },
  {
    id: 3,
    title: "Apple",
    quantity: "5",
  },
  {
    id: 4,
    title: "Onion",
    quantity: "15",
  },
  {
    id: 5,
    title: "Carrot",
    quantity: "12",
  },
  
];

const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          quantity={card.quantity}
          image={card.image}
        />
      ))}
    </div>
  );
};

const Last = () => {
  return (
    <div className="container-main">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
