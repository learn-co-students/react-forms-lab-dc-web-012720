import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  showCharLeft = () => {
    return (
      this.props.maxChars - this.state.message.length
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <p>{this.showCharLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
