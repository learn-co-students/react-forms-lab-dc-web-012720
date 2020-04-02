import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  update_username_state = (event) => {
    let updatedUsername = this.setState({
      username: event.target.value
    })
    return updatedUsername
  }

  update_password_state = (event) => {
    let updatedPassword = this.setState({
      password: event.target.value
    })
    return updatedPassword
  }

  prevent_default = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
      this.props.handleLogin(this.state)
  }


  render() {
    //debugger
    return (
      <form onSubmit={(event) => this.prevent_default(event) }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(event) => this.update_username_state(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(event) => this.update_password_state(event)} />
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
