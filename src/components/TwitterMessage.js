import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      characters_left: 280
    };
  }

  updateMessageState = (event) => {
    let updatedMessage = this.setState({
      value: event.target.value,
      characters_left: 280 - event.target.value.length
    })
    console.log(this.state.value)
    return updatedMessage
  }

  getNumCharactersLeft = () => {
    let chars_left = this.props.maxChars - this.state.value.length
    return chars_left
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.updateMessageState(event)} value={this.state.value}/>
        <p>Character Counter: {this.state.characters_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;
