import React from 'react';
import "../../../style/website/header.css";

function Header(props) {
  return(
  <div className="jumbotron d-flex text-center" id="header">
  <div className="container vertical-center">
    <h1 className="display-4">
      <span type="text" id="name1">{props.name1}</span>
      &amp; 
      <span type="text" id="name2">{props.name2}</span>
    </h1>
  </div>
  </div>
  )
}

export default Header;