import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShoppingHome() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div>
      {categories.map((values) => {
        return (
          <div key={values}>
            <Link to={`/products/${values}`}>{values}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingHome;
