import React from "react";
import axios from "axios";

import ProfileCard from "./ProfileCard"
import UserCard from "./UserCard"



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
                    window.location.href = "/"
                })
    }
    render() {
        return (
            <>
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
                <div className="container">
                    <h1 className="my-3">User Who Likes You!</h1>
                    <div className="card-columns">
                        <UserCard
                            name="Gina"
                            partnerName="Moon"
                            dayOfWedding="07/17/2019"
                            howManyGuest="100"
                            enjoyThing="Travel"
                            email="nnjh12@gmail.com" />
                        <UserCard
                            name="Jin"
                            partnerName="Sup"
                            dayOfWedding="08/17/2019"
                            howManyGuest="10"
                            enjoyThing="Cooking"
                            email="12@gmail.com" />
                        <UserCard
                            name="May"
                            partnerName="April"
                            dayOfWedding="07/17/2021"
                            howManyGuest="1000"
                            enjoyThing="Cook"
                            email="May@gmail.com" />
                        <UserCard
                            name="Roh"
                            partnerName="Hyun"
                            dayOfWedding="02/18/2019"
                            howManyGuest="30"
                            enjoyThing="Dance"
                            email="dance@gmail.com" />
                                                    <UserCard
                            name="Roh"
                            partnerName="Hyun"
                            dayOfWedding="02/18/2019"
                            howManyGuest="30"
                            enjoyThing="Dance"
                            email="dance@gmail.com" />



                    </div>
                </div>
            </>
        );
    }
}
export default Vendor;
