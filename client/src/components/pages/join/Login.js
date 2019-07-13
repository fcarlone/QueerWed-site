import React from "react";
import axios from "axios";
<<<<<<< HEAD
import Container from "../../layout/Container";
||||||| merged common ancestors
import Container from "../../layout/Container"
=======
import Container from "../../layout/Container"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import {Button} from "../../layout/Button"
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b

class Login extends React.Component {
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
<<<<<<< HEAD
    console.log("handle get user ", event.target.value, userObject);

    // Save user to MongoDb
    return axios
      .post("user-login", userObject)
      .then(response => {
        console.log(response.data);
      })
      .then(
        this.setState({
          email: "",
          password: ""
||||||| merged common ancestors
    // Handle onSubmit
    onSubmitLogin = event => {
      event.preventDefault();
  
      console.log("onSumit button pressed", this.state);
  
      const userObject = {
        email: this.state.email,
        password: this.state.password
      };
      console.log("handle get user ", event.target.value, userObject);
  
      // Save book to MongoDb
      return axios
        .post("user-login", userObject)
        .then(response => {
          console.log(response.data);
=======
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return axios
      .post("user-login", userObject)
      .then(response => {
        console.log(response.data);
        window.location.href = "/planning"
      })
      .then(
        this.setState({
          email: "",
          password: ""
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
        })
<<<<<<< HEAD
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
||||||| merged common ancestors
        .then(
          this.setState({
            email: "",
            password: ""
          })
        );
=======
      ).catch(function (error) {
        console.log(error);
        window.location.href = "/login"
      });;
  };

  // Handle onSubmit
  onSubmitSignup = event => {
    event.preventDefault();
    console.log("onSubmitSignup");
    console.log("onSumit button pressed", this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
    };
<<<<<<< HEAD
    console.log("handle get user ", event.target.value, userObject);

    // Save user to MongoDb
    return axios
      .post("user-signup", userObject)
      .then(response => {
        console.log(response.data);
      })
      .then(
        this.setState({
          email: "",
          password: ""
||||||| merged common ancestors
  
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
  
      // Save book to MongoDb
      return axios
        .post("user-signup", userObject)
        .then(response => {
          console.log(response.data);
=======
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return axios
      .post("user-signup", userObject)
      .then(response => {
        console.log(response.data);
      })
      .then(
        this.setState({
          email: "",
          password: ""
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
        })
      );
<<<<<<< HEAD
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
      <Container>
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
      </Container>
    );
||||||| merged common ancestors
    }
=======
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
      <Container>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" className="mx-auto mt-5">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h5 text-center mb-5 mt-3">Log in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        value={this.state.password}
                        onChange={this.onChangePassword}
                      />
                    </div>
                    <div className="text-center">
                      <Button onClick={this.onSubmitLogin} value="Login" />
                      <br></br>
                      <p className="mt-2">Not a member? <a href="/signup">Sign Up</a></p>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Container>
    );
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
  }
<<<<<<< HEAD
}
export default Login;
||||||| merged common ancestors
  export default Login;
=======
}
export default Login;
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
