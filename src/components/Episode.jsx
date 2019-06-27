import React from "react";
import T from "prop-types";
import ReadMore from "./ReadMore";

export const Episode = ({ changeEpisode, mp3, title, description }) => (
  <div>
    <h2 onClick={changeEpisode} className="podcast-episode-title" data-mp3={mp3} data-title={title}>
      {title}
    </h2>
    <ReadMore text={description} />
  </div>
);

Episode.propTypes = {
    changeEpisode: T.func,
    mp3: T.string,
    title: T.string,
    description: T.string
};

export default Episode;
