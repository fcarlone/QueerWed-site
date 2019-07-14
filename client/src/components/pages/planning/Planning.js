import React, { Component } from "react";
import Container from "../../layout/Container.js";
import GuestList from "./GuestList";
import Todos from "../planning/Todo/Todos";
import Events from "./Event/Events";

class Planning extends Component {
  render() {
    return (
      <Container>
        <div className="planningMain">
          <div className="header">
            <h1>Planning Component</h1>
          </div>
        </div>
      </Container>
    );
  }
}

export default Planning;
