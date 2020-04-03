import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '', 
      count: 280
    };
  }

  captureTweet = (event) => {
    if (this.state.count > 0){
      this.setState({
        tweet: event.target.value,
        count: this.state.count - 1
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet}onChange={this.captureTweet}/>{this.state.count}
      </div>
    );
  }
}

export default TwitterMessage;
