import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  //This is an event handler local to this component
  // We kept this because we do not need the extracting from form behaviour in the parent
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    // This is the method passed from parent as a prop
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
