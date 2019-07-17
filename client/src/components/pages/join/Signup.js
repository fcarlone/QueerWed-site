import React from "react";
import axios from "axios";
import Container from "../../layout/Container";
import Nav from "../../layout/Nav";

import Carousel from "../../layout/Carousel";

class Signup extends React.Component {
  state = {
    questionArray: [
      {
        name: "name",
        question: "What’s your name?"
      },
      {
        name: "partnerName",
        question: "What’s your partner’s name?"
      },
      {
        name: "dayOfWedding",
        question: "What day is your wedding?"
      },
      {
        name: "howManyGuest",
        sub: "An estimate is ok!",
        question: "How many guests are you having?"
      },
      {
        name: "enjoyThing",
        sub: "Now for helping you set up your registry.",
        question: " What do you and your partner enjoy doing together?"
      },
      {
        name: "email",
        question: "What’s your email?"
      },
      {
        name: "password",
        sub: "Last thing!",
        question: "Set your password."
      }
    ],
    email: "",
    password: "",
    name: "",
    partnerName: "",
    dayOfWedding: "",
    howManyGuest: "",
    enjoyThing: ""
  };

  // Handle onSubmit
  onSubmitSignup = event => {
    event.preventDefault();
    console.log("onSubmitSignup");
    console.log("onSumit button pressed", this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      partnerName: this.state.partnerName,
      dayOfWedding: this.state.dayOfWedding,
      howManyGuest: this.state.howManyGuest,
      enjoyThing: this.state.enjoyThing
    };
    console.log("handle get user ", event.target.value, userObject);

    // Save book to MongoDb
    return axios
      .post("user-signup", userObject)
      .then(response => {
        console.log(response.data);
        window.location.href = "/planning";
      })
      .then(
        this.setState({
          email: "",
          password: "",
          name: "",
          partnerName: "",
          dayOfWedding: "",
          howManyGuest: "",
          enjoyThing: ""
        })
      );
  };

  // Handle onChange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // onChangeEmail = event => {
  //   this.setState({ email: event.target.value });
  // };

  // onChangePassword = event => {
  //   this.setState({ password: event.target.value });
  // };

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Carousel
            list={this.state.questionArray}
            onChange={this.handleInputChange}
            onClick={this.onSubmitSignup}
          >
            <h1>Congratulations on your big day coming up!</h1>
            <h3>Now for a few questions.</h3>
          </Carousel>
        </Container>
      </>
    );
  }
}
export default Signup;
