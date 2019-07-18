import React from 'react';
import "../../../style/website/header.css";

function Header(props) {
  return(
  <div className="jumbotron d-flex text-center" id="header">
  <div className="container vertical-center">
    <h1 className="display-4">
      <input className="text-center"
      onChange={props.handleInputChange} 
      value={props.value}
      name= "name1"
      type="text"  
      placeholder="Your name" />
      &amp; 
      <input className="text-center"
      onChange={props.handleInputChange}
      value={props.value2}
      name= "name2"
      type="text" 
      placeholder="Your spouse's name" />
    </h1>

    <button onClick={props.handleAddButton} type="button" className="btn btn-info">Add</button>
    {/* <button type="button" className="btn btn-light">Edit</button> */}
    <br></br>
    {/* <button type="button" className="btn btn-secondary">Upload Your Cover Photo</button> */}

  </div>
  </div>
  )
}

export default Header;