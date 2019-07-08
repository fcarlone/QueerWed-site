import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
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
                {/* <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tutorials</a>
                            <ul>
                                <li><a href="#">Photoshop</a></li>
                                <li><a href="#">Illustrator</a></li>
                                <li><a href="#">Web Design</a>
                                    <ul>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Articles</a>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">User Experience</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Inspiration</a></li>
                    </ul>
                </nav> */}



                <header>
                    <Router>
                        <MDBNavbar color="white" dark expand="md" fixed="top">
                            <MDBNavbarBrand className="pink-text" href="/">
                                <strong>allCouples</strong>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <li><a href="/planning">Planning Tools</a>
                                        <ul>
                                            <li><a href="/planning/">Calander</a></li>
                                            <li><a href="/planning/">Check List</a></li>
                                            <li><a href="/planning/">Guest List</a></li>
                                            <li><a href="/planning/">Manage Vendors</a></li>

                                        </ul>
                                    </li>
                                    <li><a href="/registry">Wedding Registry</a>
                                        <ul>
                                            <li><a href="/registry/">Create Your Website</a></li>
                                            <li><a href="/registry/">Find A Couple</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/website">Wedding Website</a>
                                        <ul>
                                            <li><a href="/website/">Create Your Registry</a></li>
                                            <li><a href="/website/">Find A Couple</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/vendor">Find Professionals</a>
                                        <ul>
                                            <li><a href="/vendor/">Find Your Wedding Team</a></li>
                                            <li><a href="/vendor/">Recommend Your Wedding Team</a></li>
                                        </ul>
                                    </li>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <div className="md-form my-0">
                                            <span className="m-1"><a href="/" className="pink-text">Sign Up</a></span>
                                            <span className="m-1"><a href="/" className="pink-text">Log In</a></span>
                                        </div>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>
                </header>
            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;