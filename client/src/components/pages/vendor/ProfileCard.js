import React from 'react';
import { MDBIcon } from "mdbreact";
import "../../../style/vendor/vendor.css"



const ProfileCard = (props) => {
    return (
        <div className="background p-5" style={{ backgroundColor: "#eac7dc" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <div className="profile-img-container mx-auto">
                            <img src={props.image} alt={props.name} style={{ height: "300px" }}></img>
                        </div>
                    </div>
                    <div className="col-sm-8 profile-container">
                        <a href="/logout" className="white-text float-right mt-0 mr-0" onClick={props.logOut}>LogOut <i className="fas fa-sign-out-alt"></i></a>

                        <div className="profile-content-container">
                            <h1 className="white-text mb-3">Hi! {props.name}</h1>
                            <p className="white-text"><MDBIcon far icon="envelope mr-2" />{props.email}</p>
                            <p className="white-text"><i className="fas fa-bars mr-2"></i>{props.category}</p>
                            <p className="white-text"><i className="fas fa-mobile-alt mr-2"></i>{props.phone}</p>
                            <p className="white-text"><i className="fas fa-map-marker-alt mr-2"></i>{props.address} {props.city} {props.state} {props.zipcode}</p>
                            <p className="white-text"><i className="far fa-comment-alt mr-2"></i>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileCard;