import React from "react";
import T from "prop-types";
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

SearchResult.propTypes = {
    artwork: T.string,
    url: T.string,
    collection: T.string,
    genres: T.array
};

export default SearchResult;
