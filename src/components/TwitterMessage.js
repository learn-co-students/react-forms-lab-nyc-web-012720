import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }
  handleChange = event => {
    this.setState(previousState => {
      return {
        message: event.target.value,
        maxChars: previousState.maxChars - event.target.value.length
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <span>{this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
