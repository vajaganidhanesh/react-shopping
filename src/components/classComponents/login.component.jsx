import React, { Component } from "react";

export default class Logincomponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "welcome to class components",
      components: ["dhanesh", "vajagani", "hello"],
      productData: {
        Name: "",
        Price: 0,
        City: "",
        Stock: false,
      },
    };
    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    alert(`${event.target.id}\n
    ${event.target.clientTop}\n
     ${event.target.clientHeight}\n
      ${event.target.clientWidth}`);
    for (let propName in event.target) {
      console.log(propName, ": ", event[propName]);
    }
  }

  updateState() {
    this.setState({
      title: "its class based component",
    });
  }

  handleChange(e) {
    const { id, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    this.setState((prevState) => ({
      productData: {
        ...prevState.productData,
        [id]: inputValue,
      },
    }));
    console.log(this.state.productData);
  }
  handleSubmitData() {
    console.log(this.state.productData);
  }

  render() {
    return (
      <>
        {/* <div>{this.state.title}</div>
        <ol>
          {this.state.components.map((values) => (
            <div key={values}>{values}</div>
          ))}
        </ol>
        <button
          id="loginButton"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Click
        </button>
        <button onClick={() => this.updateState()} className="btn btn-success">
          update
        </button> */}

        <div className="container-fluid">
          <div className="row">
            <dl className="col-6">
              <dt>Enter Name</dt>
              <dd>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.state.productData.Name}
                />
              </dd>
              <dt>Enter Price</dt>
              <dd>
                <input
                  type="number"
                  name="Price"
                  id="Price"
                  defaultValue={this.state.productData.Price}
                  onChange={this.handleChange.bind(this)}
                />
              </dd>
              <dt>Stock</dt>
              <dd className="form-check-label">
                <input
                  type="checkbox"
                  name=""
                  id="Stock"
                  onChange={this.handleChange.bind(this)}
                />
              </dd>
              <dt>Select City</dt>
              <dd>
                <select
                  name="City"
                  id="City"
                  onChange={this.handleChange.bind(this)}
                  defaultValue={this.state.productData.City}
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </dd>
              <button className="btn btn-primary">Submit Details</button>
            </dl>
            <dl className="col-6">
              <dt>ProductName</dt>
              <dd>{this.state.productData.Name}</dd>
              <dt>Price</dt>
              <dd>{this.state.productData.Price} </dd>
              <dt>City</dt>
              <dd>{this.state.productData.City} </dd>
              <dt>Stock</dt>
              <dd>
                {this.state.productData.Stock === true
                  ? "stock available"
                  : "out of stock"}{" "}
              </dd>
            </dl>
          </div>
        </div>
      </>
    );
  }
}
