import React from 'react';
import "../../../style/website/guestList.css";


function GuestList(props) {
  return(
    <div className="jumbotron d-flex align-items-center" id="guestlist">
      <div className="container vertical-center">
      <p id="guestListTitle"><span>Guest List</span></p>
        <div className="tab tab-1">
          <table id="table" border="1">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Table Number</th>
              </tr>
            </thead>
            <tbody>
              {props.guestList.map((guest) => {
                if(guest.isEditing){
                  return (
                    <tr key={guest.id}>
                      <td>
                        <input value={props.currentGuest.first_name} onChange={(e) => props.handleChange("first_name", e.target.value)}></input>
                      </td>
                      <td>
                        <input value={props.currentGuest.last_name} onChange={(e) => props.handleChange("last_name", e.target.value)}></input>
                      </td>
                      <td>
                        <input value={props.currentGuest.table_number} onChange={(e) => props.handleChange("table_number", e.target.value)}></input>
                        <button className="checkdone" onClick={() => props.editGuest(guest, true)}>√ Done</button>
                      </td>
                    </tr>
                  )
                } else {
                return (
                  <tr key={guest.id} >
                    <td onClick={() => props.editGuest(guest, false)}>{guest.first_name}</td>
                    <td>{guest.last_name}</td>
                    <td>{guest.table_number}<button className="removeButton" onClick={() => props.removeGuest(guest.id)}>X</button></td>
                  </tr>
                )}

              })}
            </tbody>
          </table>
        </div>
        <div className="tab tab-2">
          {/* First Name<input type="text" name="fname" id="fname"></input>
          Last Name<input type="text" name="lname" id="lname"></input>
          Table Number<input type="text" name="tnumber" id="tnumber"></input> */}

          <button onClick={props.addGuest}>Add Guest</button>
        </div>
      </div>
    </div>
  
  )
}

export default GuestList;