import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
  }

  onChange = (event) => {

    this.setState({
      textInput: event.target.value
    })


    // console.log(event.target.value)
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.onChange}
          value={this.state.textInput} />
        <div>Characters Left: {this.props.maxChars - this.state.textInput.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
