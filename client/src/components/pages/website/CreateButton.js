import React from "react";
import "../../../style/website/CreateButton.css";

const buttonstyle = {
  marginBottom : '30px'
}

function CreateButton(props) {
  return(
    <div>
      <a href="/website/user/kk" target="_blank"><button style={buttonstyle} type="button" className="btn btn-secondary btn-lg btn-block">Create Your Own Website</button></a>
    </div>
  )
}

export default CreateButton;