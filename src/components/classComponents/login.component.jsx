import React, { Component } from "react";

export default class Logincomponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "welcome to class components",
      components: ["dhanesh", "vajagani", "hello"],
    };
    this.updateState = this.updateState.bind(this);
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

  render() {
    return (
      <>
        <div>{this.state.title}</div>
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
        </button>
      </>
    );
  }
}
