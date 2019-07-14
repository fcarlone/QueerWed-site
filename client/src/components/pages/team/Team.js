import React from "react";
import axios from "axios";

import Container from "../../layout/Container.js"
import TeamSearch from "./TeamSearch.js";
import Card from "./Card"
import '../../../style/team/team.css'



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

    favoriteVendor = () => {

    }

    render() {
        return (
            <Container>
                <div className="image-container">
                    <h2 className="centered"><strong>Find your Wedding professionals in your area!</strong></h2>
                    <img src="http://stephgrantprod.wpengine.com/wp-content/uploads/2013/07/ShannonSeemaWedding-15345-800x533.jpg"></img>
                    {/* <img src="http://ericacamilleproductions.com/weddings/wp-content/uploads/2019/02/mymoon-brooklyn-weddingphotographer-lgbt001.jpg"></img> */}

                </div>
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
                            image={ele.image} />
                    ))}
                </div>
            </Container>
        );
    }
}
export default Team;
