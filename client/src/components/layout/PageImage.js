import React from "react";

const PageImage = (props) => (
    <div className="main-image-container">
        <h2 className="centered title-font" style={{fontWeight:"bold"}}><strong>{props.title}</strong></h2>
        <img src={props.src} alt="PageImage"></img>
    </div>
);

export default PageImage;




