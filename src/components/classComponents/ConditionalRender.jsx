import React from "react";

export class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      model: "horizontal",
    };
  }
  handleChange(e) {
    this.setState({
      model: e.target.value,
    });
    console.log(e.target.value);
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <select onChange={this.handleChange.bind(this)}>
            <option value="-1">Select One</option>
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </select>
        </div>
        <ConditionBased model={this.state.model} />
      </>
    );
  }
}

export class ConditionBased extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.model === "horizontal") {
      return (
        <>
          <div>
            <span className="bi bi-youtube text-danger ms-2"></span>
            <span className="bi bi-linkedin ms-2 text-primary"></span>
            <span className="bi bi-instagram text-danger ms-2"></span>
            <span className="bi bi-facebook text-primary ms-2"></span>
          </div>
        </>
      );
    } else {
      return (
        <div className="container-fluid d-flex flex-column ">
          <span className="bi bi-youtube text-danger me-1"></span>
          <span className="bi bi-linkedin me-1 text-primary"></span>
          <span className="bi bi-instagram text-danger me-1"></span>
          <span className="bi bi-facebook text-primary me-1"></span>
        </div>
      );
    }
  }
}
