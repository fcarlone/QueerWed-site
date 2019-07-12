import React from "react";
import { MDBIcon } from "mdbreact";
// import "../../styles/registryTitle.css";

const RegistryTitle = () => {
  return (
    <div className="image-container">
      <div
        className="text-white text-left
            align-items-center title-container"
      >
        <h6 className="white-text">
          <MDBIcon icon="gifts" />
          <strong> Gifts</strong>
        </h6>
        <h3 className="py-3 text-left font-weight-bold name-container">
          <strong>APP NAME Registry</strong>
        </h3>
        <p className="pb-3" />
      </div>
    </div>
  );
};

export default RegistryTitle;
