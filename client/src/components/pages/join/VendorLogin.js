import React from "react";
import axios from "axios";
import Container from "../../layout/Container"
import Nav from "../../layout/Nav";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import { Button } from "../../layout/Button"
import { withRouter } from "react-router-dom"

class VendorLogin extends React.Component {
  state = {
    email: "",
    password: ""
  };
  // Handle onSubmit
  onSubmitLogin = event => {
    event.preventDefault();

    console.log("onSubmit button pressed", this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return axios
      .post("/vendoruser-login", userObject)
      .then(response => {
        console.log(response.data);
        this.props.history.push("/vendor")
        // window.location.href = "/vendor"
      })
      .then(
        this.setState({
          email: "",
          password: ""
        })
      ).catch(function (error) {
        console.log(error);
        window.location.href = "/login/vendor"
      });;
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
      <>
        <Nav />
        <Container>
          <MDBContainer>
            <MDBRow>
              <MDBCol sm="8" md="6" lg="4" className="mx-auto mt-5">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h5 text-center mb-5 mt-3 title-text grey-text">VENDOR LOGIN</p>
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
                        <p className="mt-2">Not a member? <a href="/signup/vendor">Sign Up</a></p>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Container>
      </>
    );
  }
}
export default withRouter(VendorLogin);
