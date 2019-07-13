import React from "react";
import axios from "axios";
<<<<<<< HEAD
import Container from "../../layout/Container";
||||||| merged common ancestors
import Container from "../../layout/Container"
=======
import Container from "../../layout/Container"
import Carousel from "../../layout/Carousel"

>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b

class Signup extends React.Component {
<<<<<<< HEAD
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
||||||| merged common ancestors
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
        })
        .then(
          this.setState({
            email: "",
            password: ""
          })
        );
=======
  state = {
    questionArray: [
      {
        name: "name",
        question: "What’s your name?"
      },
      {
        name: "partnerName",
        sub: "Hi, so-and-so!",
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
      },
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
        window.location.href = "/planning"
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
      <Container>
        <Carousel
          list={this.state.questionArray}
          onChange={this.handleInputChange}
          onClick={this.onSubmitSignup}>
          <h1>Congratulations on your big day coming up!</h1>
          <h4>Now for a few questions.</h4>
        </Carousel>
      </Container>
    );
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
  }
<<<<<<< HEAD
}
export default Signup;
||||||| merged common ancestors
  export default Signup;
=======
}
export default Signup;
>>>>>>> a634b7ca3443647c79478b8e3c45c6310ebb4b3b
