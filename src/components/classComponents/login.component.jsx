import React, { Component } from "react";

export default class Logincomponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "welcome to class components",
      components: ["dhanesh", "vajagani", "hello"],
    };
  }
  render() {
    return (
      <>
        <div>{this.state.title}</div>
        <ol>
          {this.state.components.map((values) => (
            <div key={values}>{values}</div>
          ))}
        </ol>
      </>
    );
  }
}
