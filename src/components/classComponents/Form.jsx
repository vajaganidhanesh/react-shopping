import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        text: "",
        checkbox: false,
      },
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
    console.log(this.state.formData);
  }

  render() {
    return (
      <form>
        <label>
          Text:
          <input
            type="text"
            name="text"
            value={this.state.formData.text}
            onChange={this.handleChange.bind(this)}
          />
          {this.state.formData.text}
        </label>
        <label>
          Checkbox:
          <input
            type="checkbox"
            name="checkbox"
            checked={this.state.formData.checkbox}
            onChange={this.handleChange.bind(this)}
          />
        </label>
      </form>
    );
  }
}

export default MyForm;
