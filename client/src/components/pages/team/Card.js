import React from 'react';

const Card = (props) => (
    <div className="card mb-3" style={{maxWidth: "900px"}}>
        <div className="row no-gutters">
            <div className="col-md-3">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" className="card-img" alt={props.name}></img>
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.category}</p>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text">{props.description}</p>                    
                    <a href={props.website} className="btn btn-primary m-0" rel="noopener noreferrer" target="_blank">Go to Website</a>
                </div>
            </div>
        </div>
    </div>
)

export default Card;

