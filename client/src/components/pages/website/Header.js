import React from 'react';
import "../../../style/website/header.css";

function Header(props) {
  return(
  <div className="jumbotron d-flex text-center" id="header">
  <div className="container vertical-center">
    <h1 className="display-4">
      <input type="text" id="name1" placeholder="Your name">{props.name1}</input> 
      &amp; 
      <input type="text" id="name2" placeholder="Your spouse name">{props.name2}</input>
    </h1>
    <button onClick={props.handleAddNames} type="button" className="btn btn-info">Add</button>
    <button type="button" className="btn btn-light">Edit</button>
  </div>
  </div>
  )
}

export default Header;