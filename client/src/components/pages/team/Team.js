import React from "react";
import axios from "axios";

import Container from "../../layout/Container.js"
import TeamSearch from "./TeamSearch.js";
import Card from "./Card"


class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            location: "",
            result: []
        };
    }

    componentDidMount() {
        this.loadAllVendor();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadAllVendor = () => {
        return axios
            .get("/api/team")
            .then(response => {
                console.log(response.data);
                this.setState({
                    result: response.data
                })
            }).catch(function (error) {
                console.log(error);
            });;
    };

    handleSearch = () => {
        // if (this.state.category && this.state.location) {
            return axios
                .get(`/api/team/${this.state.category}`)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        result: response.data
                    })
                }).catch(function (error) {
                    console.log(error);
                });;
        // }
    };

    favoriteVendor = () => {

    }

    render() {
        return (
            <Container>
                <h1>Team Page Test</h1>
                <TeamSearch
                    onClick={this.handleSearch}
                    onChange={this.handleInputChange} />
                {this.state.result.map((ele, index) => (
                    <Card
                        key={index}
                        name={ele.name}
                        category={ele.category}
                        address={ele.address}
                        phone={ele.phone}
                        description={ele.description}
                        website={ele.website} />
                ))}
            </Container>
        );
    }
}
export default Team;
