import React from 'react';
import "../../../style/website/header.css";

function Header(props) {
  return(
  <div className="jumbotron d-flex text-center">
  <div className="container vertical-center">
    <h1 className="display-4">
      <input type="text" id="name1">{props.name1}</input> 
      &amp; 
      <input type="text" id="fname2">{props.name2}</input>
    </h1>
    <button onClick={props.addName}>Add</button>
    <button>Edit</button>
  </div>
  </div>
  )
}

export default Header;