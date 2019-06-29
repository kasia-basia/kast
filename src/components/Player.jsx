import React from "react";
import T from "prop-types";
import FilePlayer from "react-player/lib/players/FilePlayer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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

  static propTypes = {
    currEpisodeTitle: T.string,
    currEpisodeUrl: T.string
  };

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
    return (
        <div className={"player-wrapper"}>
            <div className={"container player"}>
                <div className={"player-controls"}>
                    <button onClick={this.onPlay} className={"player-button"}>
                        <FontAwesomeIcon style={{color: '#ffffff'}} icon={playing ? "play" : "pause"}/>
                    </button>
                    <progress max={1} value={played}/>
                </div>
                <div className={"player-episodeTitle"}>
                    <span>{this.props.currEpisodeTitle}</span>
                </div>
                <FilePlayer
                    url={this.props.currEpisodeUrl}
                    progressInterval={1000}
                    playing={playing}
                    style={{display: "none"}}
                    onProgress={this.onProgress}
                    onDuration={this.onDuration}
                />
            </div>
        </div>
    );
  }
}
