import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
// import "../../styles/registryItem.css";

const RegistryItem = () => {
  return (
    <MDBContainer>
      <div className="registry-items-container">
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/logo/20160422224544007-Macys_2x.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.macys.com/social/registry-top-reasons/?searchmode=/wedding-registry"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/retailerImage6d8a21e8-a904-471f-a6f5-371b3af2a2e5.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.amazon.com/wedding/home/"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/20160127183109557-Anthro_logo.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.anthropologie.com/registry/home"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/retailerImagec803ff67-f12c-41a1-991d-08bb169fe3ee.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.crateandbarrel.com/wedding-registry/"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/logo/20180313114237329-BBB_Logo.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.bedbathandbeyond.com/store/page/Registry"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.xoedge.com/xo-registry/retailer/logo/20180726182959690-Williams_Sonoma_Logo.png"
            alt=""
          />
          <a
            className="btn btn-store"
            href="https://www.williams-sonoma.com/registry/"
            target={"_blank"}
          >
            Select Store
          </a>
        </div>
      </div>
    </MDBContainer>
  );
};

export default RegistryItem;
