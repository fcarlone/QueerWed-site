import React from 'react';
import { MDBIcon } from "mdbreact";


const UserCard = (props) => (
    <div className="card">
                {/* <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="CardImg"></img> */}
                <div className="card-body">
                    <h4 className="card-title">{props.name} & {props.partnerName}</h4>
                    <p className="card-text">Wedding Day : {props.dayOfWedding}</p>
                    <p className="card-text">Number of Guests : {props.howManyGuest}</p>
                    <p className="card-text">Couple's favorite thing: {props.enjoyThing}</p>
                    <p className="card-text"><MDBIcon far icon="envelope mr-1" />Contact: {props.email}</p>
                    

                    {/* <a href="#" className="btn btn-primary">Contact</a> */}
                </div>
            </div>
)

export default UserCard;