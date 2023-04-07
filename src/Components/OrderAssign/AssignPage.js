import React from "react";
import "./AssignPage.css";

const agents = [
  {
    id: 1,
    name: "ExpressDelivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Ajni, Nagpur",
  },
  {
    id: 2,
    name: "Express Delivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Reshimbagh, Nagpur",
  },
  {
    id: 3,
    name: "Express Delivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Dharampeth, Nagpur",
  },
  {
    id: 4,
    name: "Express Delivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Mankapur, Nagpur",
  },
  {
    id: 5,
    name: "Express Delivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Manish Nagar, Nagpur",
  },
  {
    id: 6,
    name: "Express Delivery",
    image: "https://imgs.search.brave.com/PzDSft-DrVjlXQJxr2qxgUEcjUOz8Z4VPfu65BEHJgg/rs:fit:356:356:1/g:ce/aHR0cHM6Ly8xMjcx/MDMyNTA1LnJzYy5j/ZG43Ny5vcmcvZGF0/YS90aHVtYnMvZnVs/bC8xMTk2NS82NTAv/MC8wLzAvZGVsaXZl/cnktYWdlbnQtaW5j/LmpwZw",
    location: "Mahal, Nagpur",
  },
];

function AssignPage() {
  return (
    <div className="agent-page">
      <h1>Select a Delivery Agent</h1>
      <div className="agent-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} />
            <div className="agent-info">
              <h2>{agent.name}</h2>
              <p>{agent.location}</p>
              <button className="update-button">Send Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignPage;
