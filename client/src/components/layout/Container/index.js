import React from "react";

function Container({ children }) {
  return (
    <div style={{ paddingTop: "60px"}}>
      {children}
    </div>
  );
}

export default Container;
