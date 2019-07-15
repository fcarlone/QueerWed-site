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
            result: [],
            filtered: []
        };
    }

    componentDidMount() {
        this.loadAllVendor();
    }

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

        if (this.state.category === "All") {
            this.loadAllVendor()
        } else {
            let filtered = this.state.result;
            filtered = filtered.filter(ele => ele.category === this.state.category)
            console.log(filtered)
            this.setState({
                filtered: filtered
            })
        }
    };

    favoriteVendor = () => {

    }

    render() {
        return (
            <Container>
                <div className="container">
                    <h1>Team Page Test</h1>
                    <TeamSearch
                        onClick={this.handleSearch}
                        onChange={this.handleInputChange} />
                    {this.state.filtered.map((ele, index) => (
                        <Card
                            key={index}
                            name={ele.name}
                            category={ele.category}
                            address={ele.address}
                            phone={ele.phone}
                            description={ele.description}
                            website={ele.website} />
                    ))}
                </div>
            </Container>
        );
    }
}
export default Team;
