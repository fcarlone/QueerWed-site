import React, { Component } from 'react';
import Nav from './WebsiteNav.js'
import Header from './Header.js';
import Details from './Detail.js';
import Container from '../../layout/Container';
import Rsvp from './Rsvp.js';
import axios from 'axios';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class WebsiteComplete extends Component {

  state = {
    userId: '',
    name1: 'enter your name',
    name2: 'enter your spouse name',
    date: '',
    location: '',
    rsvpdate: '',
    guestname: ''
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const response = await axios
      .get("/api/websitedata");
  console.log(response.data);
        this.setState({
          userId: response.data[0].user,
          name1: response.data[0].name1,
          name2: response.data[0].name2,
          date: response.data[0].date,
          location: response.data[0].location,
          rsvpdate: response.data[0].rsvpdate
        });
    }
    catch (error) {
        console.log(error);
    };
};

// Rsvp : tpye guest name and rsvp

  handleRsvpName = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name] : value
    })}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.guestname);
  }

  render() {

    return (
      <Container>
        <div className="App" id="websitebody">
          <Nav />
 
          <Header 
           name1 = {this.state.name1}
           name2 = {this.state.name2}
          />

          <div className="row align-items-center justify-content-center">
            <div className="col-10 text-center">
          <Details 
           date = {this.state.date}
           location = {this.state.location}/>

          <Rsvp   
          rsvpdate= {this.state.rsvpdate} 
          handleRsvpName = {this.handleRsvpName}
          handleSubmit = {this.handleSubmit}
          value = {this.state.guestname}
          />

            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default WebsiteComplete;