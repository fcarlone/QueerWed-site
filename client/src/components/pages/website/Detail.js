import React from 'react';
import "../../../style/website/detail.css";

function Details() {
  return(
    <div className="details jumbotron d-flex align-items-center" id="details">
    <div className="container vertical-center">
      <h1>Save the date!</h1>
      <br></br>
      <h4>Date :       
        <input type="text" id="date"></input>
        <button>Add</button>
        <button>Edit</button>
      </h4>
      <h4>Loacation :       
        <input type="text" id="location"></input>
        <button>Add</button>
        <button>Edit</button>
      </h4>
    </div>
    </div>
  )
}

export default Details;