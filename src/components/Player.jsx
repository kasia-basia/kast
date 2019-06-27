import React from "react";
import FilePlayer from "react-player/lib/players/FilePlayer";
import Duration from "./Duration";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      played: 0,
      duration: 0
    };
  }

  onPlay = () => {
    this.setState({
      playing: !this.state.playing
    });
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  onProgress = state => {
    this.setState(state);
  };

  render() {
    const { playing, played } = this.state;
    console.log(this.state);
    return (
      <div className={"player-wrapper"}>
        <div className={"container player"}>
          <button onClick={this.onPlay}>{playing ? "Pause" : "Play"}</button>

          <progress max={1} value={played} />
          <span>{this.props.currEpisodeTitle}</span>
          <FilePlayer
            url={this.props.currEpisodeUrl}
            progressInterval={1000}
            playing={playing}
            style={{ display: "none" }}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </div>
      </div>
    );
  }
}
