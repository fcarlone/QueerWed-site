import React from "react";
import axios from "axios";

class Loading extends React.Component {
  state = {
    email: "",
    password: ""
  };
  // Handle onSubmit
  onSubmitLogin = event => {
    event.preventDefault();

    console.log("onSumit button pressed", this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("handle get user ", event.target.value, userObject);

    return axios
      .post("user-login", userObject)
      .then(response => {
        console.log(response.data);
      })
      .then(
        this.setState({
          email: "",
          password: ""
        })
      );
  };

  // Handle onSubmit
  onSubmitSignup = event => {
    event.preventDefault();
    console.log("onSubmitSignup");
    console.log("onSumit button pressed", this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("handle get user ", event.target.value, userObject);

    return axios
      .post("user-signup", userObject)
      .then(response => {
        console.log(response.data);
      })
      .then(
        this.setState({
          email: "",
          password: ""
        })
      );
  };

  // Handle onChange
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Component</h1>
          <h3>Client Side</h3>
          <br />
        </header>
        <div>
          <h3>Login</h3>
          <form onSubmit={this.onSubmitLogin}>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input className="btn " type="submit" value="Login" />
          </form>
        </div>
        <div>
          <h3>Signup</h3>
          <form onSubmit={this.onSubmitSignup}>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input className="btn " type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}
export default Loading;
