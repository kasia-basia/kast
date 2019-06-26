import React from "react";
import ReadMore from "./ReadMore";

export const Episode = ({ changeEpisode, mp3, title, description }) => (
  <div>
    <h2 onClick={changeEpisode} className="podcast-episode-title" data-mp3={mp3} data-title={title}>
      {title}
    </h2>
    <ReadMore text={description} />
  </div>
);

export default Episode;
