import React from "react";
import axios from "axios";

import Container from "../../layout/Container.js"
import TeamSearch from "./TeamSearch.js";
import Card from "./Card"
import '../../../style/team/team.css'
import Nav from "../../layout/Nav";
import PageImage from "../../layout/PageImage";


class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            location: "",
            result: [],
            filtered: [],
            isLogIn: false,
            userFavorite: []
        };
    }

    componentDidMount() {
        this.isLogIn()
        this.loadAllVendor();
        this.loadFavorite();
    }

    isLogIn = async () => {
        try {
            const response = await axios
                .get("/user");
            console.log(response.data);

            if (response.data) {
                this.setState({
                    isLogIn: true
                }, () => { console.log(this.state) });
            } else {
                return
            }
        }
        catch (error) {
            console.log(error);
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    loadAllVendor = async () => {
        try {
            const response = await axios
                .get("/api/team");
            console.log(response.data);
            this.setState({
                category: "",
                location: "",
                result: response.data,
                filtered: response.data
            });
        }
        catch (error) {
            console.log(error);
        };
    };

    handleSearch = (event) => {
        event.preventDefault()
        console.log("handle Search")
        // when user filter nothing
        if (this.state.category === "" && this.state.location === "") {
            let filtered = this.state.result;
            console.log(filtered)
            this.setState({
                filtered: filtered
            })
        }
        // when user filter category only
        else if (this.state.category !== "" && this.state.location === "") {
            let filtered = this.state.result;
            filtered = filtered.filter(ele => ele.category === this.state.category)
            console.log(filtered)
            this.setState({
                filtered: filtered
            })
        }
        // when user filter location only
        else if (this.state.category === "" && this.state.location !== "") {
            let filtered = this.state.result;
            filtered = filtered.filter(ele => ele.city === this.state.location)
            console.log(filtered)
            this.setState({
                filtered: filtered
            })
        }
        // when user filter both
        else {
            let filtered = this.state.result;
            filtered = filtered.filter(ele => ele.category === this.state.category && ele.city === this.state.location)
            console.log(filtered)
            this.setState({
                filtered: filtered
            })
        }
    };

    loadFavorite = async () => {
        try {
            const response = await axios
                .get("/api/favorite");
            let vendorIdArray = response.data.map(ele => ele.vendorUser)
            console.log(vendorIdArray);

            this.setState({
                userFavorite: vendorIdArray
            }, () => {
                console.log(this.state)
            });
        }
        catch (error) {
            console.log(error);
        };
    }

    readFavorite = (id) => {
        return this.state.userFavorite.includes(id)
    }

    addFavorite = (event) => {
        event.preventDefault();
        // console.log(event.target.parentElement.dataset.favorite)
        console.log("handle Favorite")
        let favoriteObject = {
            user: "",
            vendorUser: event.target.dataset.vendorid
        }
        console.log(favoriteObject)

        return axios
            .post("/api/favorite", favoriteObject)
            .then(response => {
                console.log(response.data.vendorUser);
                let vendorIdArray = this.state.userFavorite
                // console.log(vendorIdArray)
                vendorIdArray.push(response.data.vendorUser)
                // console.log(vendorIdArray)

                this.setState({
                    userFavorite: vendorIdArray
                }, () => {
                    console.log(this.state)
                });
            })
    }

    undoFavorite = (event) => {
        event.preventDefault();
        let vendorid = event.target.dataset.vendorid
        return axios
            .delete(`/api/favorite/${event.target.dataset.vendorid}`)
            .then(response => {
                console.log(response.data);
                let vendorIdArray = this.state.userFavorite
                console.log(vendorIdArray)
                console.log(vendorid)
                vendorIdArray = vendorIdArray.filter(ele => ele !== vendorid)
                console.log(vendorIdArray)

                this.setState({
                    userFavorite: vendorIdArray
                }, () => {
                    console.log(this.state)
                });
            })
    }

    render() {
        return (
            <>
                <Nav />
                <Container>
                    <PageImage 
                     title="Find your Wedding professionals in your area!"
                     src="http://stephgrantprod.wpengine.com/wp-content/uploads/2015/01/AM_web-393-800x533.jpg"/>
                    <div className="container">
                        <TeamSearch
                            onClick={this.handleSearch}
                            onChange={this.handleInputChange}
                            location={this.state.location} />
                        {this.state.filtered.map((ele, index) => (
                            <Card
                                key={index}
                                name={ele.name}
                                category={ele.category}
                                address={ele.address}
                                city={ele.city}
                                state={ele.state}
                                zipcode={ele.zipcode}
                                phone={ele.phone}
                                description={ele.description}
                                website={ele.website}
                                image={ele.image}
                                vendorid={ele._id}
                                favorite={this.readFavorite(ele._id)}
                                addFavorite={this.addFavorite}
                                undoFavorite={this.undoFavorite}
                                isLogIn={this.state.isLogIn}
                            />
                        ))}
                    </div>
                </Container>
            </>
        );
    }
}
export default Team;
