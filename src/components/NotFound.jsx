import React from "react";
import sad from "../img/sadFile.png";

export const NotFound = ({ zeroResults }) => (
  <div className={"notFound-container"}>
    <div className={"error-img"}>
      <img src={sad} alt="" />
    </div>
    <h2 className={"notFound-title"}>{zeroResults ? "NOTHING HERE..." : "NOT FOUND"}</h2>
    <p className={"notFound-text"}>
      {zeroResults ? "Maybe try searching for something else?" : "This page does not exist"}
    </p>
  </div>
);

export default NotFound;
