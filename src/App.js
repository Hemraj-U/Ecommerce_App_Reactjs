import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetails";
import "./App.css";
// import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="./components/Registration" element={Registration}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
