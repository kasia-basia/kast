import React from "react";
import ReactAudioPlayer from "react-audio-player";

export const Player = ({ currEpisodeUrl, currEpisodeTitle }) => (
  <div className={"player-container"}>
    <div className={"player-content"}>
      <ReactAudioPlayer src={currEpisodeUrl} controls preload={"auto"} />
      <div className={"now-playing"}>
        <span>Now playing:</span>
        <br /> {currEpisodeTitle}
      </div>
    </div>
  </div>
);

export default Player;
