import React from "react";
import T from "prop-types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

 const createMarkup = content => ({__html: `${content}`});

export const PodcastGeneralInfo = ({ feedImg, feedTitle, feedAuthor, feedDescr, link }) => (
  <div className={"podcast-info"}>
    <div className={"podcast-img"}>
      <img src={feedImg} alt={"Podcast logo"} />
    </div>
    <div className={"podcast-info-content"}>
      <h1 className={"podcast-info-title"} dangerouslySetInnerHTML={createMarkup(feedTitle)} />
      <span className={"podcast-info-author"} dangerouslySetInnerHTML={createMarkup(feedAuthor)}/>
      <p className={"podcast-info-descr"} dangerouslySetInnerHTML={createMarkup(feedDescr)} />
      <div className={"podcast-info-link"}>
          <FontAwesomeIcon icon={"globe-americas"} />
          <a href={link} target="_blank" rel="noopener noreferrer" >{link}</a>
      </div>
    </div>
  </div>
);

PodcastGeneralInfo.propTypes = {
    feedImg: T.string,
    feedAuthor: T.string,
    feedTitle: T.string,
    feedDescr: T.string,
    link: T.string
};

export default PodcastGeneralInfo;
