import React, { Fragment } from "react";
import axios from "axios";

import { MDBInput } from "mdbreact";

import Container from "../../layout/Container";
import Nav from "../../layout/Nav";
import { Button } from "../../layout/Button";

class VendorSignup extends React.Component {
  state = {
    email: "",
    password: "",
    category: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    website: "",
    description: "",
    image: ""
    // selectedImage: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state[name]);
      }
    );
  };
  onSubmitSignup = event => {
    event.preventDefault();
    console.log("onSubmitSignup");
    console.log("onSumit button pressed", this.state);

    const userObject = this.state;
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return (
      axios
        // Question. Without "/" it hit /login/vendoruser-signup??
        .post("/vendoruser-signup", userObject)
        .then(response => {
          console.log(response.data);
          window.location.href = "/vendor";
        })
        .then(
          this.setState({
            email: "",
            password: "",
            category: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            website: "",
            description: "",
            image: ""
          })
        )
    );
  };

  fileSelectHandler = event => {
    console.log(event.target.files[0]);
  };

  fileUploadHandler = event => {
    // const fd = new FormData();
    axios.post("/api/photo").then(console.log("image upload"));
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <Container>
          <div className="container">
            <div
              className="SignUpValidation mx-auto"
              style={{ height: " calc(100vh - 60px)", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <h1 className="pink-text">Hi, Welcome to QueerWed</h1>
                <br />
                <h5>
                  An app for LGBTQIA+ wedding professionals to connect with
                  LGBTQIA+ folks who are getting married.
                </h5>
                <h5>
                  QueerWed is about promoting solidarity and commerce within the
                  queer community,
                </h5>
                <h5>so we ask that you only proceed if</h5>
                <br />
                <h5>
                  <a className="pink-text" href="#signUpQuestion">
                    <i className="fas fa-check mr-2" />
                    You’re a sole proprietor and identify as LGBTQIA+
                  </a>
                </h5>
                <h5>
                  <a className="pink-text" href="#signUpQuestion">
                    <i className="fas fa-check mr-2" />
                    The owner or at least one of your employees identify as
                    LGBTQIA+
                  </a>
                </h5>
                <p>
                  <a className="grey-text" href="/">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neither of
                    those, Take me back to the home
                    <i className="fas fa-arrow-right ml-2" />
                  </a>
                </p>
                <br />
                <br />
              </div>
            </div>
            <div
              id="signUpQuestion"
              style={{ paddingTop: "60px", paddingBottom: "60px" }}
            >
              <h1 className="pink-text">Tell me about your business.</h1>
              <MDBInput
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                label="email"
              />
              <MDBInput
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                label="password"
              />
              <MDBInput
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
                label="What kind of business are you in?"
                prepend="Options"
              />
              <MDBInput
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                label="What’s the name of your business?"
              />
              <MDBInput
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                label="What’s your physical address?"
              />
              <MDBInput
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                label="City"
              />
              <MDBInput
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                label="State"
              />
              <MDBInput
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                label="Zip Code"
              />
              <MDBInput
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                label="What’s your phone number?"
              />
              <MDBInput
                name="website"
                value={this.state.website}
                onChange={this.handleInputChange}
                label="What’s your website?"
                prepend="https://"
              />
              <MDBInput
                name="image"
                value={this.state.image}
                onChange={this.handleInputChange}
                label="Your Image URL"
              />
              <MDBInput
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                type="textarea"
                label="Anything else?(optional)"
              />
              <Button
                className="ml-0"
                value="Sign Up"
                onClick={this.onSubmitSignup}
              />
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
export default VendorSignup;
