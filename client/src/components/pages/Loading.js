import React from "react";
// import axios from "axios";
import { MDBMask, MDBView } from 'mdbreact';
import { LinkedButton, LinkedOutlinedButton } from "../layout/Button.js"


class Loading extends React.Component {
  render() {
    return (
      <>
        {/* <MDBView src="https://johngress.com/wp-content/uploads//2012/09/ChicagoGayWeddingPhotographer11.jpg"> */}
        {/* <MDBView src="https://johngress.com/wp-content/uploads//2012/09/ChicagoGayWeddingPhotographer11.jpg"> */}
        <MDBView src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-196-eye-ae-003430041.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=a46a57a75bdc89cfc399beb2bb69cf9d">
        {/* <MDBView src="https://image.freepik.com/free-photo/newlywed-gay-couple-dancing-wedding-celebration_53876-46945.jpg"> */}

          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <h2>This Navbar is fixed</h2>
            <h5>It will always stay visible on the top, even when you scroll down</h5>
            <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            <br />
            <div>
              <LinkedButton
                value="Find A Couple"
                width="200px"
                float="left"
                href="/website/find"
              />
              <LinkedButton
                value="Sign Up"
                width="200px"
                float="left"
                href="/signup"
              />
              <LinkedOutlinedButton
                value="Are You A Vendor?"
                width="200px"
                float="left"
                href="/login/vendor"
              />

            </div>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}
export default Loading;