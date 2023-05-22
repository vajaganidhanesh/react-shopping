import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingHome from "./ShoppingHome";
import Products from "./Products";
import Details from "./Details";

function Shopping() {
  return (
    <BrowserRouter>
      <div className=" pt-4 pb-4 ps-4 pe-4 container-fluid d-flex justify-content-between bg-black text-white justify-content-center align-items-center">
        <h1 className="fs-2">shopping</h1>
        <ul className=" d-flex justify-content-center align-items-center list-unstyled gap-5 m-0">
          <Link to="" className="text-decoration-none text-white">
            <li className="fs-4">home</li>
          </Link>
          <li className="fs-4">contacts</li>
          <li className="fs-4">about</li>
        </ul>
        <ul className="d-flex justify-content-center align-items-center list-unstyled gap-5 m-0">
          <li className="bi bi-search fs-4"></li>
          <li className="bi bi-heart fs-4"></li>
          <li className="bi bi-person fs-4"></li>
        </ul>
      </div>
      <Routes>
        <Route path="" element={<ShoppingHome />} />
        <Route path="products/:catName" element={<Products />} />
        <Route path="details/:productId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Shopping;
