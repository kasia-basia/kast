import React from "react";
import T from "prop-types";

export const RecentEpisodes = ({ children }) => (
  <>
    <h2 className={"podcast-heading"}>
      Recent <span>episodes</span>
    </h2>
    <div className="podcast-episodes-container">{children}</div>
  </>
);

RecentEpisodes.propTypes = {
    children: T.node
};

export default RecentEpisodes;
