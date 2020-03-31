import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  // handleUsernameChange = (event) => {
  //   this.setState({username: event.target.value})
  // }

  // handlePasswordChange = (event) => {
  //   this.setState({password: event.target.value})
  // }

  handleSubmit = (event) => 
    {
      event.preventDefault()
  
      if (!this.state.username || !this.state.password) {
        return 
        //this is returning nothing
      }
      this.props.handleLogin(this.state)
    }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value = {this.state.username} onChange = {this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} onChange = {this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
