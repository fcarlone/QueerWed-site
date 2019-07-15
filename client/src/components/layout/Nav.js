import React from 'react';
import axios from "axios";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../../style/nav.css"

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            isLogIn: false
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.isLogin();
    }


    isLogin = async () => {
        try {
            const response = await axios
                .get("/user");
            console.log(response.data);

            if (response.data) {
                this.setState({
                    isLogIn: true
                });
            } else {
                return
            }
        }
        catch (error) {
            console.log(error);
        };
    };



    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="white" dark expand="md" fixed="top">
                            <MDBNavbarBrand>
                                <a className="pink-text" href="/"><strong>QueerWed</strong></a>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <li><a className="mainMenu" href="/planning">Planning Tools</a>
                                        <ul className="subMenuContainer">
                                            <div className="subMenu subMenu1">
                                                <li><a href="/planning/calendar">Calendar</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/registry/create">Create Your Registry</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/website/create">Create Your Website</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/team">Find Your Team</a></li>
                                            </div>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/registry">Wedding Registry</a>
                                        <ul className="subMenuContainer">
                                            <div className="subMenu subMenu1">
                                                <li><a href="/planning/calendar">Calendar</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/registry/create">Create Your Registry</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/website/create">Create Your Website</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/team">Find Your Team</a></li>
                                            </div>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/website">Wedding Website</a>
                                        <ul className="subMenuContainer">
                                            <div className="subMenu subMenu1">
                                                <li><a href="/planning/calendar">Calendar</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/registry/create">Create Your Registry</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/website/create">Create Your Website</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/team">Find Your Team</a></li>
                                            </div>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/team">Find Professionals</a>
                                        <ul className="subMenuContainer">
                                            <div className="subMenu subMenu1">
                                                <li><a href="/planning/calendar">Calendar</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/registry/create">Create Your Registry</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/website/create">Create Your Website</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </div>
                                            <div className="subMenu">
                                                <li><a href="/team">Find Your Team</a></li>
                                            </div>
                                        </ul>
                                    </li>
                                </MDBNavbarNav>
                            </MDBCollapse>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    {this.state.isLogIn ?
                                        <div className="joinMenuContainer" style={{ float: "right" }}>
                                            <span className="m-1"><a className="joinMenu pink-text" href="/logout">Log Out</a></span>
                                            <span className="m-1"><a className="joinMenu grey-text" href="/login/vendor">Vendor</a></span>
                                        </div>
                                        :
                                        <div className="joinMenuContainer" style={{ float: "right" }}>
                                            <span className="m-1"><a className="joinMenu pink-text" href="/signup">Sign Up</a></span>
                                            <span className="m-1"><a className="joinMenu pink-text" href="/login">Log In</a></span>
                                            <span className="m-1"><a className="joinMenu grey-text" href="/login/vendor">Vendor</a></span>
                                        </div>
                                    }
                                </MDBNavItem>
                            </MDBNavbarNav>

                        </MDBNavbar>
                    </Router>
                </header>
            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;