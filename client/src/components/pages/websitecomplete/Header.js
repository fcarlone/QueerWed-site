import React from 'react';
import "../../../style/website/header.css";

function Header(props) {
  return(
  <div className="jumbotron d-flex text-center" id="header">
  <div className="container vertical-center">
    <h1 className="display-4">
      <h2 type="text" id="name1">{props.name1}</h2> 
      &amp; 
      <h2 type="text" id="fname2">{props.name2}</h2>
    </h1>
  </div>
  </div>
  )
}

export default Header;