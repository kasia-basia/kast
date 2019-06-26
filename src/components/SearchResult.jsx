import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ artwork, url, collection, genres }) => (
  <div className={"searchRes-result"}>
    <div>
      <img className={"searchRes-img"} alt="" src={artwork} />
    </div>
    <div className={"searchRes-content"}>
      <Link className={"searchRes-link"} to={`/podcast/?query=${url}`}>
        <h3 className={"searchRes-title"}>{collection}</h3>
      </Link>
      <p className={"searchRes-genres"}>{genres.join(" | ")}</p>
    </div>
  </div>
);

export default SearchResult;
