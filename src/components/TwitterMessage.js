import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  charLeft = () => {
    const charLimit = this.props.maxChars
    let charsNum = this.state.message.length
    return charLimit - charsNum
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event =>  this.handleChange(event)} /> <span>{this.charLeft()}</span>
      </div>
    );
  }
}

export default TwitterMessage;

