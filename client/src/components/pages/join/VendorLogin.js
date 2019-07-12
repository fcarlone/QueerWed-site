import React from "react";
import axios from "axios";
import Container from "../../layout/Container"

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
          console.log(response);
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
          <div>
            <h3>Vendor Login</h3>
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
        </Container>
      );
    }
  }
  export default VendorLogin;