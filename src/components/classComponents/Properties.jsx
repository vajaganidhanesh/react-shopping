import { Component } from "react";

export default class Properties extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div>{this.props.title}</div>
      </>
    );
  }
}
