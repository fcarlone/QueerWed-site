import React, { Component } from 'react';
import Nav from './WebsiteNav.js'
import Header from './Header.js';
import Details from './Detail.js';
import GuestBook from './GuestBook.js';
// import GuestList from './GuestList.js';
import Container from '../../layout/Container';
import Rsvp from './Rsvp.js';
import Faqs from './Faqs.js';
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
    location: ''
    // guestList: [{ 
    //   id: 1, 
    //   first_name: "Enter Guest's First Name", 
    //   last_name: "Enter Guest's Last Name",
    //   table_number: 0, 
    //   isEditing: false }],
    // current_guest: {
    //   id: 0,
    //   first_name: '',
    //   last_name: '',
    //   table_number: '',
    //   isEditing: false
    // }
  };

  componentDidMount () {
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


  // Start: Header - Add name1+name2 START from here

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name] : value
    })
    // console.log(this.state.name1);
  }

  handleAddButton = (event) => {
    event.preventDefault();
    console.log(this.state.name1, this.state.name2);
  }

  // End: Add name1 and name2


  // Start: Date and Location

  handleDate = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name] : value
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
      [name] : value
  })
  }

  handleLocationButton = (event) => {
    event.preventDefault();
    console.log(this.state.location);
  }

  // Guset List: START from here
  editGuest = (current_guest, isDone) => {
    current_guest.isEditing = !current_guest.isEditing;
    if (isDone) {
      let newGuestList = [...this.state.guestList];
      newGuestList = newGuestList.map((guest) => {
        if (guest.id === current_guest.id) {
          return this.state.current_guest;
        } else {
          return guest;
        }
      });
      this.setState({
        guestList: newGuestList
      })
    } else {
      this.setState({
        current_guest: current_guest
      })
    }
  }
  removeGuest = (id) => {
    let newGuestList = this.state.guestList.filter((guest) => {
      return !(guest.id === id)
    })
    this.setState({
      guestList: newGuestList
    })
  }
  handleChange = (field, value) => {
    if (field === 'first_name') {
      this.setState({
        current_guest: { ...this.state.current_guest, first_name: value }
      })
    }
    if (field === 'last_name') {
      this.setState({
        current_guest: { ...this.state.current_guest, last_name: value }
      })
    }
    if (field === 'table_number') {
      this.setState({
        current_guest: { ...this.state.current_guest, table_number: value }
      })
    }
  }
  addGuest = () => {
    this.setState({
      guestList: [...this.state.guestList, {
        id: this.state.guestList.length + 1,
        first_name: '',
        last_name: '',
        table_number: '',
        isEditing: false
      }]
    })
  }
  // End : Guset List Functions 

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

              {/* <GuestList
                addGuest={this.addGuest}
                guestList={this.state.guestList}
                currentGuest={this.state.current_guest}
                editGuest={this.editGuest}
                handleChange={this.handleChange}
                removeGuest={this.removeGuest}
              /> */}

              <GuestBook />

              <Faqs />

              <Rsvp />

              <CreateButton 
              createWebsite={this.createWebsite}
              userId={this.state.userId}/>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Website;