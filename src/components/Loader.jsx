import React from "react";

export const Loader = () => (
  <div className={"loader-container"}>
    <h2 className={"loader-text"}>Loading</h2>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
