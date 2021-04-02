import React from "react";

class AddMessage extends React.Component {
  state = {
    value: '',
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.value === '';
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addMsg = event => {
    event.preventDefault();
    this.props.handleAddMsg(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.addMsg}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;
