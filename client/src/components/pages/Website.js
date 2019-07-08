import React, { Component } from 'react';
import Nav from '../../components_website/Nav/index.js';
import Header from '../../components_website/Header';
import Details from '../../components_website/Details';
import GuestBook from '../../components_website/GuestBook';
import GuestList from '../../components_website/GeustList';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

class Website extends Component{

  state = {
      name1:'enter your name',
      name2:'enter your spouse name',
      date:'',
      location: ''
  };

  onClickName1 = () => {
    this.setState({
      name1: 'clicked 1'
    });
  }

  onClickName2 = () => {
    this.setState({
      name2: 'clicked 2'
    });
  }



  render() {

  return  (
    <div className="App">
      <Nav />
    {/* header */}
      <Header />
 
    {/* detail */}
      <Details />

    {/* guest list */}
      <GuestList />

    {/* guest book */}
      <GuestBook />
    </div>
  );
  }
}
export default Website;
