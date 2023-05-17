import React, { useState } from "react";

function FormDataComponent() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    phoneNumber: 0,
    City: "",
    Stock: false,
  });
  const { userName, phoneNumber, City, Stock } = userDetails;

  const [error, setError] = useState({
    nameError: "",
    cityError: "",
    phoneError: "",
    StockError: "",
  });
  function handleFormdata(e) {
    e.preventDefault();
  }

  function onchange(e) {
    var { id, value, type, checked } = e.target;
    setUserDetails((userDetails) => ({
      ...userDetails,
      [id]: type === "checkbox" ? checked : value,
    }));

    setError((prevError) => ({
      ...prevError,
      nameError:
        id === "userName" && value.trim() === "" ? "Name is required." : "",
      cityError:
        id === "City" && value.trim() === "-1" ? "City is required." : "",
      phoneError:
        id === "phoneNumber" && (value === "" || isNaN(value))
          ? "Invalid phone number."
          : "",
      StockError: id === "Stock" && !checked ? "Stock must be selected." : "",
    }));
  }

  return (
    <div className="container">
      <form onSubmit={handleFormdata}>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={onchange}
              value={userName}
            />
          </dd>
          <dd>{error.nameError} </dd>
          <dt>Phone Number</dt>
          <dd>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={onchange}
            />
          </dd>
          <dd>{error.phoneError} </dd>
          <dt>City</dt>
          <dd>
            <select name="City" id="City" onChange={onchange} value={City}>
              <option value="-1">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </dd>
          <dd>{error.cityError} </dd>
          <dt>Stock</dt>
          <dd className=" form-check">
            <input
              className=" form-check-input"
              type="checkbox"
              name="Stock"
              id="Stock"
              value={Stock}
              onChange={onchange}
            />
          </dd>
          <dd>{error.StockError} </dd>
          <button>submit</button>
        </dl>
      </form>
    </div>
  );
}

export default FormDataComponent;
