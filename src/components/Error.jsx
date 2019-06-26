import React from "react";
import sad from "../img/sadFile.png";

const Loader = () => (
  <div className={"error-container"}>
    <div className={"error-img"}>
      <img src={sad} alt="Error image" />
    </div>
    <h2 className={"error-heading"}>Ooops!</h2>
    <h3 className={"error-subheading"}>Looks like something went wrong.</h3>
  </div>
);

export default Loader;
