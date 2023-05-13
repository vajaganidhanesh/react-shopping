import React, { PureComponent } from "react";

export default class PureClassComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      products: ["Tv", "Refrigerator", "monitor"],
    };
  }

  UpdateProducts() {
    this.setState({
      products: ["Tv", "Refrigerator", "monitor", "Keyboard"],
    });
  }
  componentDidUpdate() {
    console.log("Component Will Render on Update");
  }
  render() {
    return (
      <div className="container g-0">
        <p> its pure component</p>
        {this.state.products.map((values) => (
          <p key={values}>{values}</p>
        ))}
        <button
          className="btn btn-primary"
          onClick={this.UpdateProducts.bind(this)}
        >
          click
        </button>
      </div>
    );
  }
}
