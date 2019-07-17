import React, { Component } from "react";
import Container from "../../layout/Container.js";
import Nav from "../../layout/Nav"

class Planning extends Component {
  render() {
    return (
      <>
      <Nav />
      <Container>
        <div className="planningMain">
          <div className="header">
            <h1>Planning Component</h1>
          </div>
        </div>
      </Container>
      </>
    );
  }
}

export default Planning;
