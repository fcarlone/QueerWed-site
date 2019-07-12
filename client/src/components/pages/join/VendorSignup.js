import React from "react";
import axios from "axios";

import { MDBInput } from "mdbreact";

import Container from "../../layout/Container"
import { Button } from "../../layout/Button"

class VendorSignup extends React.Component {
    state = {
        email: "",
        password: "",
        category: "",
        name: "",
        address: "",
        phone: "",
        website: "",
        description: "",
        selectedImage: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
            })
            .then(
                this.setState({
                    email: "",
                    password: "",
                    category: "",
                    name: "",
                    address: "",
                    phone: "",
                    website: "",
                    description: ""
                })
            );
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
            <Container>
                <div className="container">
                    <p>
                        Hi, Welcome to XYZ, an app for LGBTQIA+ wedding professionals to connect with LGBTQIA+ folks who are getting married.
                        XYZ is about promoting solidarity and commerce within the queer community, so we ask that you only proceed if
                    </p>
                    <MDBInput name="email" value={this.state.email} onChange={this.handleInputChange} label="email" />
                    <MDBInput name="password" value={this.state.password} onChange={this.handleInputChange} type="password" label="password" />
                    <MDBInput name="category" value={this.state.category} onChange={this.handleInputChange} label="What kind of business are you in?" prepend="Options" />
                    <MDBInput name="name" value={this.state.name} onChange={this.handleInputChange} label="What’s the name of your business?" />
                    <MDBInput name="address" value={this.state.address} onChange={this.handleInputChange} label="What’s your physical address?" />
                    <MDBInput name="phone" value={this.state.phone} onChange={this.handleInputChange} label="What’s your phone number?" />
                    <MDBInput name="website" value={this.state.website} onChange={this.handleInputChange} label="What’s your website?" prepend="https://" />
                    <MDBInput name="description" value={this.state.description} onChange={this.handleInputChange} type="textarea" label="Anything else?(optional)" />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                                Upload
                            </span>
                        </div>
                        <div className="custom-file">
                            <input
                                name=""
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                onChange={this.fileSelectHandler}
                            />
                            <button onClick={this.fileUploadHandler}>upload</button>
                        </div>
                    </div>
                    <Button value="Sign Up" onClick={this.onSubmitSignup} />
                </div>
            </Container>
        );
    }
}
export default VendorSignup;
