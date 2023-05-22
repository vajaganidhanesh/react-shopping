import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [details, setDetails] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const params = useParams();
  useEffect(() => {
    const Details = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        setDetails(response.data);
      } catch (error) {}
    };
    Details();
  }, [params.productId]);
  return (
    <div>
      <div className="container">
        <h2>{details.title}</h2>
        <div
          className=" border border-1 border-primary"
          style={{ width: "200px" }}
        >
          <img src={details.image} alt="" className="img-fluid" />
        </div>
      </div>
      {/* <Link to={`/products/${details.category}`}>Back to Products</Link> */}
    </div>
  );
}

export default Details;
