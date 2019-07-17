import React from "react";
import axios from "axios";

import Container from "../../layout/Container.js"
import UserCard from "./UserCard"
import ProfileCard from "./ProfileCard"


class Vendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logOut() {
        axios.get("/logout")
            .then(
                () => {
                    window.location.href="/"
                })
    }
    render() {
        return (
            <Container>
                <ProfileCard
                    logOut={this.logOut}
                    name="Flower"
                    email="nnjh12@gmail.com"
                    category="Flower"
                    address="2200 Benjamin Franklin Pkwy"
                    city="Philadelphia"
                    state="PA"
                    zipcode="19130"
                    website="http://www.google.com"
                    description="Wedding Flower Professionals!"
                    // image="http://static.mwsrc.net/sites/mywedding.com/files/styles/width_600/public/009_JessicaBordner_Spring2016.JPG"
                    image="https://www.ftd.com/blog/content/uploads/2017/01/hero-pantone-flowers-720x474.jpg"
                />
{/* 
                <div className="container">
                    <h1>User Who Likes You!</h1>
                    <div className="card-columns">
                        {this.state.userData.map((ele, index) =>
                            <UserCard
                                key={index}
                                name={ele.name}
                                partnerName={ele.partnerName}
                                dayOfWedding={ele.dayOfWedding}
                                howManyGuest={ele.howManyGuest}
                                enjoyThing={ele.enjoyThing}
                                email={ele.email} />)}
                    </div>
                </div> */}
            </Container>
        );
    }
}
export default Vendor;
