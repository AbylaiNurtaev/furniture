import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import './App.sass'
import CatalogPage from "./pages/Catalog/CatalogPage";
import Fabrics from "./pages/Fabrics/Fabrics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/fabrics" element={<Fabrics/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
