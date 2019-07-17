import React from "react";
import axios from "axios";
import Container from "../../layout/Container";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { Button } from "../../layout/Button";

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
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return axios
      .post("user-login", userObject)
      .then(response => {
        console.log(response.data);
        window.location.href = "/planning";
      })
      .then(
        this.setState({
          email: "",
          password: ""
        })
      )
      .catch(function(error) {
        console.log(error);
        window.location.href = "/login";
      });
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
                      <br />
                      <p className="mt-2">
                        Not a member? <a href="/signup">Sign Up</a>
                      </p>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Container>
    );
  }
}
export default Login;
