import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, quantity, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
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
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 2,
    title: "Potato",
    quantity: "30",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 3,
    title: "Apple",
    quantity: "5",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 4,
    title: "Onion",
    quantity: "15",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 5,
    title: "Carrot",
    quantity: "12",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 6,
    title: "Cabbage",
    quantity: "18",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 7,
    title: "Garlic",
    quantity: "5",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
  },
  {
    id: 8,
    title: "Ginger",
    quantity: "3",
    image:
      "https://imgs.search.brave.com/iws0fGRjAWbXAsVt0qrb2ZakEEEGFq29dYq9GNyeG4E/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly93dG9w/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wNS90b21h/dG9fdHMuanBn",
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
    <div className="container">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
