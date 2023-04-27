import React, { useState } from "react";

function Databinging() {
  const [details, setDetails] = useState({
    Product: "",
    Price: 0,
    City: "",
    Stock: false,
  });

  function handleDetails(e) {
    const { id, type, checked, value } = e.target;
    setDetails({
      ...details,
      [id]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <dl>
            <dt>Product</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                name=""
                id="Product"
                value={details.Product}
                onChange={handleDetails}
              />
            </dd>
            <dt>Price</dt>
            <dd>
              <input
                className="form-control"
                type="number"
                name=""
                id="Price"
                value={details.Price}
                onChange={handleDetails}
              />
            </dd>
            <dt>City</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                name=""
                id="City"
                value={details.City}
                onChange={handleDetails}
              />
            </dd>
            <dt>Stock</dt>
            <dd className="form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                name="Stock"
                id="Stock"
                value={details.Stock}
                onChange={handleDetails}
              />
            </dd>
          </dl>
        </div>
        <div className="col-6">
          <h1>Details</h1>
          <div>{details.Product}</div>
          <div>{details.Price} </div>
          <div>{details.City} </div>
          <div>{details.Stock === true ? "stock avaible" : "Out of Stock"}</div>
        </div>
      </div>
    </div>
  );
}

export default Databinging;
