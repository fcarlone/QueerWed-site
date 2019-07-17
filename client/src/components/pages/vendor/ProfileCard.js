import React from 'react';
import { MDBIcon } from "mdbreact";
import "../../../style/vendor/vendor.css"



const ProfileCard = (props) => {
    return (
        <div className="background d-flex p-4" style={{ backgroundColor: "#007E33" }}>
            <a href="/logout" className="white-text float-right mt-3 mr-3" onClick={props.logOut}>LogOut <MDBIcon icon="angle-right" /></a>
            <div className="profile-img-container float-left mr-3">
                <img src={props.image} alt={props.name} style={{ height: "300px" }}></img>
            </div>
            <div className="float-left ">
                <h2 className="white-text">Hi! {props.name}</h2>

                <p className="white-text">{props.email}</p>
                <p className="white-text">{props.category}</p>
                <p className="white-text">{props.phone}</p>
                <p className="white-text">{props.address} {props.city} {props.state} {props.zipcode}</p>
                <p className="white-text">{props.description}</p>
            </div>

        </div>

    )
}

export default ProfileCard;