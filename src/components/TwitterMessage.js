import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    console.log(this.state)
    this.setState({
      content: event.target.value,
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.content.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.content}/>
        <p>Remaining Characters:<span>{remainingChars}</span></p>
      </div>
    );
  }
}

export default TwitterMessage;
