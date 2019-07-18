import React, { Fragment } from "react";
import RegistryTitle from "./RegistryTitle";
import RegistryItem from "./RegistryItem";
import "../../../styles/registry/registry.css";
import Nav from "../../layout/Nav"

class Registry extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <section>
    
          <RegistryTitle />
        </section>

        <section>
          <h3 className="registry-content">
            Register with one of the following retail stores
          </h3>
          <RegistryItem />
        </section>
      </Fragment>
    );
  }
}
export default Registry;
