import React from 'react';
import "../../../style/website/detail.css";

function Details(props) {
  return (
    <div className="details jumbotron d-flex align-items-center" id="details">
      <div className="container vertical-center">
        <h1 id="date1">Save the date!</h1>
        <br></br>
        <h4>Date :
        <input
        onChange={props.handleDate}
        value={props.value1}
        name="date"
        type="text" id="date" 
        placeholder="Type your big day"
        />
          <button onClick={props.handleDateButton} type="button" 
          className="btn btn-outline-secondary">Add</button>
          {/* <button className="btn btn-outline-secondary"
          type="button" >Edit</button> */}
        </h4>
        <br/>
        <h4>Location :
            <input
            onChange={props.handleLocation}
            value={props.value2}
            name="location"
            type="text" id="location"
            placeholder="Enter the address of your venue"
            />
              <button onClick={props.handleLocationButton} type="button" 
              className="btn btn-outline-secondary">Add</button>
              {/* <button className="btn btn-outline-secondary" 
              type="button">Edit</button> */}


        </h4>
      </div>
    </div>
  )
}

export default Details;