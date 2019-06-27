import React from "react";
import T from "prop-types";

export const PodcastGeneralInfo = ({ feedImg, feedTitle, feedAuthor, feedDescr }) => (
  <div className={"podcast-info"}>
    <div className={"podcast-img"}>
      <img src={feedImg} alt="" />
    </div>
    <div className={"podcast-info-content"}>
      <h1 className={"podcast-info-title"} dangerouslySetInnerHTML={{ __html: `${feedTitle}` }} />
      <span className={"podcast-info-author"}>{feedAuthor}</span>
      <p className={"podcast-info-descr"} dangerouslySetInnerHTML={{ __html: `${feedDescr}` }} />
    </div>
  </div>
);

PodcastGeneralInfo.propTypes = {
    feedImg: T.string,
    feedAuthor: T.string,
    feedTitle: T.string,
    feedDescr: T.string
};

export default PodcastGeneralInfo;
