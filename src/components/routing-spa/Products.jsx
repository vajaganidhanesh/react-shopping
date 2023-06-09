import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import Details from "./Details";
function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ParticularProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${params.catName}`
        );
        setProducts(response.data);
      } catch (error) {}
    };
    ParticularProducts();
  }, [params.catName, setProducts]);

  return (
    <>
      <div className="container-fluid " style={{ height: "90vh" }}>
        <h2>{params.catName} Products </h2>
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-wrap gap-1">
              {products.map((values) => (
                <div
                  key={values.id}
                  className=" border border-1 border-primary"
                  style={{ width: "200px" }}
                >
                  <Link to={`details/${values.id}`}>
                    <img src={values.image} alt="" className="img-fluid" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <Routes>
              <Route path="details/:productId" element={<Details />}></Route>
            </Routes>
          </div>
        </div>
        <Link to={`/`}>Back Products</Link>
      </div>
    </>
  );
}

export default Products;
