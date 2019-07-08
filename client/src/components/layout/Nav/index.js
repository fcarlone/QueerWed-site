import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

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
                                <a className="pink-text" href="/"><strong>allCouples</strong></a>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <li><a className="mainMenu" href="/planning">Planning Tools</a>
                                        <ul className="subMenuContainer">
                                            <li className="subMenu subMenu1">
                                                <li><a href="/planning/calender">Calender</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/registry/create">Create Your Website</a></li>
                                                <li><a href="/registry/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/website/create">Create Your Registry</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/vendor/find">Find Your Team</a></li>
                                                <li><a href="/vendor/recommend">Recommend Your Team</a></li>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/registry">Wedding Registry</a>
                                        <ul className="subMenuContainer">
                                            <li className="subMenu subMenu1">
                                                <li><a href="/planning/calender">Calender</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/registry/create">Create Your Website</a></li>
                                                <li><a href="/registry/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/website/create">Create Your Registry</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/vendor/find">Find Your Team</a></li>
                                                <li><a href="/vendor/recommend">Recommend Your Team</a></li>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/website">Wedding Website</a>
                                        <ul className="subMenuContainer">
                                            <li className="subMenu subMenu1">
                                                <li><a href="/planning/calender">Calender</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/registry/create">Create Your Website</a></li>
                                                <li><a href="/registry/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/website/create">Create Your Registry</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/vendor/find">Find Your Team</a></li>
                                                <li><a href="/vendor/recommend">Recommend Your Team</a></li>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a className="mainMenu" href="/vendor">Find Professionals</a>
                                        <ul className="subMenuContainer">
                                            <li className="subMenu subMenu1">
                                                <li><a href="/planning/calender">Calender</a></li>
                                                <li><a href="/planning/checklist">Check List</a></li>
                                                <li><a href="/planning/guestlist">Guest List</a></li>
                                                <li><a href="/planning/vendor">Manage Vendors</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/registry/create">Create Your Website</a></li>
                                                <li><a href="/registry/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/website/create">Create Your Registry</a></li>
                                                <li><a href="/website/find">Find A Couple</a></li>
                                            </li>
                                            <li className="subMenu">
                                                <li><a href="/vendor/find">Find Your Team</a></li>
                                                <li><a href="/vendor/recommend">Recommend Your Team</a></li>
                                            </li>
                                        </ul>
                                    </li>
                                </MDBNavbarNav>
                            </MDBCollapse>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <div className="md-form my-0">
                                        <span className="m-1"><a className="joinMenu pink-text" href="/">Sign Up</a></span>
                                        <span className="m-1"><a className="joinMenu pink-text" href="/">Log In</a></span>
                                    </div>
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