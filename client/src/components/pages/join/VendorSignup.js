import React from "react";
import axios from "axios";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Container from "../../layout/Container"
import Nav from "../../layout/Nav";
import { Button } from "../../layout/Button"
import Input from "../../layout/Input"

class VendorSignup extends React.Component {
    state = {
        email: "",
        password: "",
        category: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
        website: "",
        description: "",
        image: ""
        // selectedImage: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => { console.log(this.state[name]) });
    };
    onSubmitSignup = event => {
        event.preventDefault();
        console.log("onSubmitSignup");
        console.log("onSumit button pressed", this.state);

        const userObject = this.state;
        console.log("handle get user ", event.target.value, userObject);

        // Save book to MongoDb
        return axios
            // Question. Without "/" it hit /login/vendoruser-signup??
            .post("/vendoruser-signup", userObject)
            .then(response => {
                console.log(response.data);
                // window.location.href = "/vendor";
            })
            .then(
                this.setState({
                    email: "",
                    password: "",
                    category: "",
                    name: "",
                    address: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    phone: "",
                    website: "",
                    description: "",
                    image: ""
                })
            )
    };

    fileSelectHandler = event => {
        console.log(event.target.files[0])
    }

    fileUploadHandler = event => {
        // const fd = new FormData();
        axios.post("/api/photo").then(
            console.log("image upload")
        )
    }


    render() {
        return (
            <>
                <Nav />
                <Container>
                    <div className="container">
                        <div className="SignUpValidation mx-auto" style={{ height: " calc(100vh - 60px)", position: "relative" }}>
                            <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
                                <h1 className="pink-text title-font">Hi, Welcome to QueerWed</h1>
                                <br></br>
                                <h5>An app for LGBTQIA+ wedding professionals to connect with LGBTQIA+ folks who are getting married.</h5>
                                <h5>QueerWed is about promoting solidarity and commerce within the queer community,</h5>
                                <h5>so we ask that you only proceed if</h5>
                                <br></br>
                                <h5><a className="pink-text" href="#signUpQuestion"><i className="fas fa-check mr-2"></i>You’re a sole proprietor and identify as LGBTQIA+</a></h5>
                                <h5><a className="pink-text" href="#signUpQuestion"><i className="fas fa-check mr-2"></i>The owner or at least one of your employees identify as LGBTQIA+</a></h5>
                                <p><a className="grey-text" href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neither of those, Take me back to the homepage<i className="fas fa-arrow-right ml-2"></i></a></p>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                        <div id="signUpQuestion" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                            <h1 className="pink-text title-font">Tell me about your business.</h1>
                            <Input name="email" value={this.state.email} onChange={this.handleInputChange} label="email" />
                            <Input name="name" value={this.state.name} onChange={this.handleInputChange} label="What’s the name of your business?" />
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput" className="m-0 p-0 pink-text">What kind of business are you in?</label>
                                <select className="form-control mb-2 pl-0" id="form1" name="category" size="1" style={{ width: "100%", borderRadius: "0px", borderTop: "0px", borderLeft: "0px", borderRight: "0px" }} onChange={this.handleInputChange}>
                                    <option defaultValue></option>
                                    <option value="Flowers">Flowers</option>
                                    <option value="Catering">Catering</option>
                                    <option value="DJing">DJing</option>
                                    <option value="Music">Music</option>
                                    <option value="Decor">Decor</option>
                                </select>
                            </div>
                            <Input name="address" value={this.state.address} onChange={this.handleInputChange} label="What’s your physical address?" />

                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol size="sm" className="pl-0"><Input name="city" value={this.state.city} onChange={this.handleInputChange} label="City" /></MDBCol>
                                    <MDBCol size="sm" className="pl-0"><Input name="state" value={this.state.state} onChange={this.handleInputChange} label="State" /></MDBCol>
                                    <MDBCol size="sm" className="pl-0 pr-0"><Input name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} label="Zip Code" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>

                            <Input name="phone" value={this.state.phone} onChange={this.handleInputChange} label="What’s your phone number?" />
                            <Input name="website" value={this.state.website} onChange={this.handleInputChange} label="What’s your website?" prepend="https://" />
                            <Input name="image" value={this.state.image} onChange={this.handleInputChange} label="Your Image URL" />
                            <Input name="description" value={this.state.description} onChange={this.handleInputChange} type="textarea" label="Anything else?(optional)" />
                            <Input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" label="Set your password" />

                            <Button className="ml-0" value="Sign Up" onClick={this.onSubmitSignup} />
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}
export default VendorSignup;
