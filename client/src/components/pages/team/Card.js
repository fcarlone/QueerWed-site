import React from 'react';

const Card = (props) => (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "900px" }}>
        <div className="row card-row">
            <div className="col-md-4">
                <div>
                    <img src={props.image} className="card-img" alt={props.name}></img>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.category}</p>
                    <p className="card-text">
                        <span className="mr-1">{props.address}
                        </span><span className="mr-1">{props.city}
                        </span><span className="mr-1">{props.state}
                        </span><span className="mr-1">{props.zipcode}</span>
                    </p>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text">{props.description}</p>
                    <a href={props.website} className="btn btn-primary m-0" rel="noopener noreferrer" target="_blank">Go to Website</a>
                </div>
            </div>
        </div>
    </div>
)

export default Card;

