import React from "react";
import Dashboard from "./routes/Dashboard";
import OrderQueue from "./routes/OrderQueue";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/orderqueue" element={<OrderQueue />} />
      </Routes>
    </div>
  );
}

export default App;
