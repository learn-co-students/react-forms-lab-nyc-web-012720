import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  onChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remain = (this.props.maxChars - this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={event => this.onChange(event)}
        value={this.state.message}
        />
         {remain}
      </div>
    );
  }
}

export default TwitterMessage;
