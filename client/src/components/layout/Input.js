import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput" className="m-0 p-0 pink-text">{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id="formGroupExampleInput"
        name={props.name}
        onChange={props.onChange}
        vallue={props.value}
        style={{width: "100%", borderRadius: "0px", borderTop: "0px", borderLeft: "0px", borderRight: "0px", paddingLeft: "3px"}}
      />
    </div>
  );
}

export default Input;