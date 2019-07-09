import React from "react";
// import axios from "axios";
import { MDBMask, MDBView } from 'mdbreact';
import { LinkedButton, LinkedOutlinedButton } from "../layout/Button"


class Loading extends React.Component {
  render() {
    return (
      <>
        <MDBView src="https://johngress.com/wp-content/uploads//2012/09/ChicagoGayWeddingPhotographer11.jpg">
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
