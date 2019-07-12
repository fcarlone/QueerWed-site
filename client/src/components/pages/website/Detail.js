import React from 'react';
import "../../../style/website/detail.css";

function Details(props) {
  return (
    <div className="details jumbotron d-flex align-items-center" id="details">
      <div className="container vertical-center">
        <h1>Save the date!</h1>
        <br></br>
        <h4>Date :
        <input type="text" id="date"></input>
          <button onClick={props.addDate} type="button" className="btn btn-outline-secondary">Add</button>
          <button type="button" className="btn btn-outline-secondary">Edit</button>
        </h4>
        <br/>
        <h4>Location :
        <div class="input-group">
            <input type="text" className="form-control" id="location"></input>
            <div class="input-group-append" id="button-addon4">
              <button onClick={props.addLocation} class="btn btn-outline-secondary" type="button">Add</button>
              <button class="btn btn-outline-secondary" type="button">Edit</button>
            </div>
          </div>
        </h4>
      </div>
    </div>
  )
}

export default Details;