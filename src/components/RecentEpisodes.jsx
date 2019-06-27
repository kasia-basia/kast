import React from "react";

export const RecentEpisodes = ({ children }) => (
  <>
    <h2 className={"podcast-heading"}>
      Recent <span>episodes</span>
    </h2>
    <div className="podcast-episodes-container">{children}</div>
  </>
);

export default RecentEpisodes;
