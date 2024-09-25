import React from "react";
import Navbar from "./Components/Navbar";
import ProductsList from "./Pages/ProductsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./Pages/SearchResults ";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
