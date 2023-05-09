import React, { Component } from "react";

export default class FakeStore extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          products: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {
          // eslint-disable-next-line array-callback-return
          this.state.products.map((values) => {
            return <p key={values}>{values.title}</p>;
          })
        }
      </div>
    );
  }
}
