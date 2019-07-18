import React, { Component } from 'react';
import Nav from './WebsiteNav.js'
import Header from './Header.js';
import Details from './Detail.js';
// import GuestBook from './GuestBook.js';
// import GuestList from './GuestList.js';
import Container from '../../layout/Container';
import MainNav from '../../layout/Nav';
import Rsvp from './Rsvp.js';
// import Faqs from './Faqs.js';
import CreateButton from './CreateButton.js';
import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class Website extends Component {

  state = {
    userId: '',
    name1: '',
    name2: '',
    date: '',
    location: '',
    rsvpdate: '',
    guestname: ''
  };

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    try {
      const response = await axios
        .get("/api/websitedata");
      console.log(response.data);
      this.setState({
        userId: response.data[0].user,
      });
    }
    catch (error) {
      console.log(error);
    };
  };


  // Header - Add name1+name2 START from here

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    // console.log(this.state.name1);
  }

  handleAddButton = (event) => {
    event.preventDefault();
    console.log(this.state.name1, this.state.name2);
    this.setState({
      
    })
  }

  // Header - End: Add name1 and name2


  // Date and Location

  handleDate = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleDateButton = (event) => {
    event.preventDefault();
    console.log(this.state.date);
  }
  handleLocation = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleLocationButton = (event) => {
    event.preventDefault();
    console.log(this.state.location);
  }

  // End : Date and Location

  // Start : RSVP date
  handleInputRsvp = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleAddRsvp = (event) => {
    event.preventDefault();
    console.log(this.state.rsvpdate);
  }

  // End : RSVP date

  // Start : create website
  createWebsite = () => {
    axios.post('/create-website', this.state)
      .then(res => {
        console.log(res)
      })
  }
  // End : create website

  render() {

    return (
      <>
        <MainNav />
        <Container>
          <div className="App">
            <Nav />

            <Header
              handleInputChange={this.handleInputChange}
              handleAddButton={this.handleAddButton}
              value={this.state.name1}
              value2={this.state.name2}
            />

            <div className="row align-items-center justify-content-center">
              <div className="col-10 text-center">
                <Details
                  handleDate={this.handleDate}
                  handleLocation={this.handleLocation}
                  handleDateButton={this.handleDateButton}
                  handleLocationButton={this.handleLocationButton}
                  value1={this.state.date}
                  value2={this.state.location}
                />

                <Rsvp
                  handleInputRsvp={this.handleInputRsvp}
                  handleAddRsvp={this.handleAddRsvp}
                  value3={this.state.rsvpdate}
                />

                <CreateButton
                  createWebsite={this.createWebsite}
                  userId={this.state.userId} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
export default Website;