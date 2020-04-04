import React from "react";

class TwitterMessage extends React.Component {

  state = {
    chars: ""
  }

  handleChange = event => {
    this.setState({
      chars: event.target.value
    })
  }

  charCounter = () => {
    const textInput = this.state.chars.length
    return this.props.maxChars - textInput
  }

  render() {
    console.log(this.state.chars);
    
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.chars}
          onChange={this.handleChange}
        />
        <p>You have {this.charCounter()} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
