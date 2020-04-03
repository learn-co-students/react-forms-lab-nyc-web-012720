import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '', 
      password: ''
    };
  }

  handleUser = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleLogin = event => {
    event.preventDefault()
    let formData = {username: this.state.username, password: this.state.password}
    if (this.state.username && this.state.password) {
      this.props.handleLogin(formData)
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleLogin} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleUser}/>
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
