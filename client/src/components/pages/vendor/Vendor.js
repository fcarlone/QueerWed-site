import React from "react";
import axios from "axios";

import Container from "../../layout/Container.js"
import UserCard from "./UserCard"
import ProfileCard from "./ProfileCard"


class Vendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorProfile: {},
            userWhoLikeYou: [],
            userData: []
        };
    }
    componentDidMount() {
        this.loadVendorProfile();
        this.loadUserWhoLikeYou();
    }
    loadVendorProfile = async () => {
        try {
            const response = await axios
                .get("/vendoruser");
            console.log(response.data);
            this.setState({
                vendorProfile: response.data
            }, () => {
                console.log(this.state.vendorProfile)
            });
        }
        catch (error) {
            console.log(error);
        };
    };
    loadUserWhoLikeYou = async () => {
        try {
            const response = await axios
                .get("/api/favorite/vendor");
            console.log(response.data);
            let userIdArray = response.data.map(ele => ele.user)

            this.setState({
                userWhoLikeYou: userIdArray
            }, () => {
                console.log(this.state.userWhoLikeYou)
                this.getUserData()
            });
        }
        catch (error) {
            console.log(error);
        };
    };
    getEachUserData = async (userId) => {
        await axios
            .get(`/user/${userId}`)
            .then((response) => {
                console.log(response.data[0])
                let userData = response.data[0]
                return userData
            })
    };
    getUserData = async () => {
        try {
            let userDataArray = await Promise.all(this.state.userWhoLikeYou.map((ele) => {
                console.log(ele)
                let result = this.getEachUserData(ele)
                console.log(result)
                return result
            }));
            console.log(userDataArray)
            this.setState({
                userData: userDataArray
            }, () => { console.log(this.state.userData) })
        }
        catch (error) {
            console.log(error);
        };
    };
    render() {
        return (
            <Container>
                <ProfileCard 
                name={this.state.vendorProfile.name}
                email={this.state.vendorProfile.email}
                category={this.state.vendorProfile.category}
                address={this.state.vendorProfile.address}
                city={this.state.vendorProfile.city}
                state={this.state.vendorProfile.state}
                zipcode={this.state.vendorProfile.zipcode}
                website={this.state.vendorProfile.website}
                description={this.state.vendorProfile.description}
                image={this.state.vendorProfile.image}
                />

                <div className="container">
                    <h1>User Who Likes You!</h1>
                    <div className="card-columns">
                        <UserCard
                            name="Gina"
                            partnerName="Moon"
                            dayOfWedding="06/20/2020"
                            howManyGuest="100"
                            enjoyThing="Travel"
                            email="nnjh12@gmail.com" />
                        {/* <UserCard
                            name={this.state.userData[0].name}
                            partnerName={this.state.userData[0].partnerName}
                            dayOfWedding={this.state.userData[0].dayOfWedding}
                            email={this.state.userData[0].email}
                        /> */}
                    </div>
                </div>
            </Container>
        );
    }
}
export default Vendor;
