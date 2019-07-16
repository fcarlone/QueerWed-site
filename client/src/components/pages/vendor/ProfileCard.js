import React from 'react';
import { MDBIcon } from "mdbreact";


const ProfileCard = (props) => {
    return (
        <div className="background" style={{ backgroundColor: "#007E33"}}>
            <p className="white-text float-right mt-3 mr-3">LogOut <MDBIcon icon="angle-right" /></p>
            <div className="container p-5">
                <h2 className="white-text">Hi! {props.name}</h2>
                <p className="white-text">{props.email}</p>
                <p className="white-text">{props.category}</p>
                <p className="white-text">{props.phone}</p>
                <p className="white-text">{props.address} {props.city} {props.state} {props.zipcode}</p>
                <p className="white-text">{props.description}</p>
                <p className="white-text">{props.image}</p>
            </div>
        </div>

    )
}

export default ProfileCard;