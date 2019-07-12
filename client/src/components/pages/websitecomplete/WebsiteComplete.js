import React, { Component } from 'react';
import Nav from './WebsiteNav.js'
import Header from './Header.js';
import Details from './Detail.js';
import GuestBook from './GuestBook.js';
// import GuestList from './GuestList.js';
import Container from '../../layout/Container';
import Rsvp from './Rsvp.js';
import Faqs from './Faqs.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class WebsiteComplete extends Component {

  state = {
    name1: 'enter your name',
    name2: 'enter your spouse name',
    date: '',
    location: '',
    guestList: [{ id: 1, first_name: "Enter Guest's First Name", last_name: "Enter Guest's Last Name", table_number: 0, isEditing: false }],
    current_guest: {
      id: 0,
      first_name: '',
      last_name: '',
      table_number: '',
      isEditing: false
    }
  };

  // Add name1+name2 START from here

  addName1 = () => {
    this.setState({
      name1: [...this.state.guestList, {
        name1: ''
      }]
    })
  }

  // Add name1 and name2 function END from here



  // Guset List Functions START from here

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
    console.log(value);
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

  // Guset List Functions END

  render() {

    return (
      <Container>
        <div className="App">
          <Nav />

          <Header />

          <div className="row align-items-center justify-content-center">
            <div className="col-10 text-center">

              <Details />
{/* 
              <GuestList
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

            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default WebsiteComplete;