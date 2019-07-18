import React, { Fragment } from "react";
import axios from "axios";

import UserCard from "./UserCard";
import ProfileCard from "./ProfileCard";
import { withRouter } from "react-router-dom";

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
  vendorLogOut() {
    axios.get("/vendoruser-logout").then(() => {
      window.location.href = "/";
    });
  }
  loadVendorProfile = async () => {
    try {
      const response = await axios.get("/vendoruser");
      console.log(response.data);
      this.setState(
        {
          vendorProfile: response.data
        },
        () => {
          console.log(this.state.vendorProfile);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  loadUserWhoLikeYou = async () => {
    try {
      const response = await axios.get("/api/favorite/vendor");
      console.log(response.data);
      let userIdArray = response.data.map(ele => ele.user);

      this.setState(
        {
          userWhoLikeYou: userIdArray
        },
        () => {
          console.log(this.state.userWhoLikeYou);
          for (let i = 0; i < this.state.userWhoLikeYou.length; i++) {
            this.getEachUserData(this.state.userWhoLikeYou[i]);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  getEachUserData = async userId => {
    await axios.get(`/user/${userId}`).then(response => {
      let userData = response.data[0];

      this.setState(
        prevState => ({
          userData: [...prevState.userData, userData]
        }),
        () => {
          console.log(this.state.userData);
        }
      );
    });
  };
  render() {
    return (
      <Fragment>
        <ProfileCard
          logOut={this.vendorLogOut}
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
          phone={this.state.vendorProfile.phone}
        />

        <div className="container">
          <h1 className="p-4 text-center title-font" style={{ color: "#e91e63" }}>Couples Who Like You!</h1>
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
        </div>
        </Fragment>
    );
  }
}
export default withRouter(Vendor);
