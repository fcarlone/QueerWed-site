import React from 'react';
import "../../../style/website/detail.css";

function Details(props) {
  return(
    <div className="details jumbotron d-flex align-items-center" id="details">
    <div className="container vertical-center">
      <h1 id="date1">Save the date!</h1>
      <br></br>
      <h4 id="date2">Date : <span>{props.date}</span>
      </h4>
      <br/>
      <h4 id="location1">Location : <span>{props.location}</span>    
      </h4>
    </div>
    </div>
  )
}

export default Details;