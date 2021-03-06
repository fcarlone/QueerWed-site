import React, { Component } from 'react';
import Nav from './WebsiteNav.js'
import Header from './Header.js';
import Details from './Detail.js';
// import Container from '../../layout/Container';
import Rsvp from './Rsvp.js';
import Registry from './Registry.js';
import axios from 'axios';
// import { array } from 'prop-types';
// import { lstat } from 'fs';
// import { eventNames } from 'cluster';

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
    guestname: '',
    rsvp: '',
    isGoing: null
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
          name1: response.data[response.data.length-1].name1,
          name2: response.data[response.data.length-1].name2,
          date: response.data[response.data.length-1].date,
          location: response.data[response.data.length-1].location,
          rsvpdate: response.data[response.data.length-1].rsvpdate
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
    })
  }

  handleYesName = (event) => {
    event.preventDefault();
    console.log(this.state.name)
  }

  handleCheckInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.value : null;
    const name = target.name;
  
       this.setState({
       [name]: value
       });
    }

    handleRsvpSubmitButton = (event) => {
      event.preventDefault();
      console.log(this.state.guestname);
      console.log(this.state.isGoing);
      axios.post("/api/rsvp", { guestName: this.state.guestname, isGoing:this.state.isGoing, })
      .then(response => console.log(response))
    }

  render() {

    return (
      <>
        <div className="App" id="websitebody">
          <Nav />
          <Header
            name1={this.state.name1}
            name2={this.state.name2}
          />

          <div className="row align-items-center justify-content-center">
            <div className="col-10 text-center">
              <Details
                date={this.state.date}
                location={this.state.location} />

              {/* <Registry /> */}

          <Rsvp   
          rsvpdate= {this.state.rsvpdate} 
          handleRsvpName = {this.handleRsvpName}
          handleRsvpSubmitButton = {this.handleRsvpSubmitButton}
          handleCheckInputChange = {this.handleCheckInputChange}
          value = {this.state.guestname}
          />


            </div>
          </div>
        </div>
      </>
    );
  }
}
export default WebsiteComplete;