import React from "react";
import { MDBInput } from "mdbreact"
import Container from "../../layout/Container"

class VendorLogin extends React.Component {
    render() {
        return (
            <Container>
                <div className="container">
                    <p>
                        Hi, Welcome to XYZ, an app for LGBTQIA+ wedding professionals to connect with LGBTQIA+ folks who are getting married.
                        XYZ is about promoting solidarity and commerce within the queer community, so we ask that you only proceed if
                    </p>
                    <MDBInput label="What kind of business are you in?" />
                    <MDBInput label="What’s the name of your business?" />
                    <MDBInput label="What’s your physical address?" />
                    <MDBInput label="What’s your phone number?" />
                    <MDBInput label="What’s your website?" />


                </div>
            </Container>
        );
    }
}
export default VendorLogin;
