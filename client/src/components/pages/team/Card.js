import React from 'react';
import axios from "axios";

import { MDBIcon } from "mdbreact";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteList:[],
            favorite:false,
            isLogin:false
        };
    }

    addFavorite = (event) => {
        event.preventDefault();
        console.log(event.target.parentElement.dataset.favorite)

        console.log("handle Favorite")
        let favoriteObject = {
            user:"",
            vendorUser: event.target.dataset.vendorid
        }
        console.log(favoriteObject)

        return axios
            .post("/api/favorite", favoriteObject)
            .then(response => {
                console.log(response.data);
                // window.location.href = "/vendor";
            })
    }

    undoFavorite = (event) => {
                event.preventDefault();
        console.log(event.target.parentElement.dataset.favorite)


    }

    render() {
        return (
            <div className="card mb-3 mx-auto" style={{ maxWidth: "900px" }}>
                <div className="row card-row">
                    <div className="col-md-4">
                        <div className="cardImageContainer">
                            <img src={this.props.image} className="card-img" alt={this.props.name}></img>
                        </div>
                    </div>
                    <div className="col-md-8 team-card-body">
                        <div className="card-body">
                            {this.props.favorite ? <MDBIcon icon="heart" size="lg" className="pink-text" onClick={this.undoFavorite} data-vendorid={this.props.vendorid} />
                                : <MDBIcon far icon="heart" size="lg" className="indigo-text" onClick={this.addFavorite} data-vendorid={this.props.vendorid} />
                            }
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.category}</p>
                            <p className="card-text">
                                <span className="mr-1">{this.props.address}
                                </span><span className="mr-1">{this.props.city}
                                </span><span className="mr-1">{this.props.state}
                                </span><span className="mr-1">{this.props.zipcode}</span>
                            </p>
                            <p className="card-text">{this.props.phone}</p>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.website} className="btn btn-primary ml-0 mb-3" rel="noopener noreferrer" target="_blank">Go to Website</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const Card = (props) => {
//     return (
//         <div className="card mb-3 mx-auto" style={{ maxWidth: "900px" }}>
//             <div className="row card-row">
//                 <div className="col-md-4">
//                     <div className="cardImageContainer">
//                         <img src={this.props.image} className="card-img" alt={this.props.name}></img>
//                     </div>
//                 </div>
//                 <div className="col-md-8 team-card-body">
//                     <div className="card-body" id="dataFavorite" data-favorite={false}>
//                         {this.props.favorite ? <MDBIcon icon="heart" size="lg" className="pink-text" onClick={this.props.onClick} data-vendorid={this.props.vendorid} />
//                             : <MDBIcon far icon="heart" size="lg" className="pink-text" onClick={this.props.onClick} data-vendorid={this.props.vendorid} />
//                         }
//                         <h5 className="card-title">{this.props.name}</h5>
//                         <p className="card-text">{this.props.category}</p>
//                         <p className="card-text">
//                             <span className="mr-1">{this.props.address}
//                             </span><span className="mr-1">{this.props.city}
//                             </span><span className="mr-1">{this.props.state}
//                             </span><span className="mr-1">{this.props.zipcode}</span>
//                         </p>
//                         <p className="card-text">{this.props.phone}</p>
//                         <p className="card-text">{this.props.description}</p>
//                         <a href={this.props.website} className="btn btn-primary ml-0 mb-3" rel="noopener noreferrer" target="_blank">Go to Website</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Card;

