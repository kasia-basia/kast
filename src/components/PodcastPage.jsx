import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Episode from "./Episode";
import PodcastGeneralInfo from "./PodcastGeneralInfo";
import Player from "./Player";

export default class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      episodes: [],
      feedDescr: "",
      feedTitle: "",
      feedAuthor: "",
      feedImg: "",
      currEpisodeUrl: "",
      currEpisodeTitle: "",
      loaded: false,
      error: false
    };
  }

  changeEpisode = e => {
    this.setState({
      currEpisodeUrl: e.currentTarget.dataset.mp3,
      currEpisodeTitle: e.currentTarget.dataset.title
    });
  };

  render() {
    const episodes = this.state.episodes.map((e, i) => (
      <Episode
        changeEpisode={this.changeEpisode}
        mp3={e.enclosure.link}
        title={e.title}
        description={e.description}
        key={i}
      />
    ));

    if (this.state.error) {
      return <Error />;
    }

    if (!this.state.loaded) {
      return <Loader />;
    }

    if (this.state.loaded) {
      const { currEpisodeTitle, currEpisodeUrl, feedImg, feedTitle, feedAuthor, feedDescr } = this.state;
      return (
        <div className={"container"}>
          <Player currEpisodeTitle={currEpisodeTitle} currEpisodeUrl={currEpisodeUrl} />
          <PodcastGeneralInfo feedImg={feedImg} feedTitle={feedTitle} feedAuthor={feedAuthor} feedDescr={feedDescr} />
          <h2 className={"podcast-heading"}>
            Recent <span>episodes</span>
          </h2>
          <div className="podcast-episodes-container">{episodes}</div>
        </div>
      );
    }
  }

  componentDidMount() {
    const feedUrl = this.props.location.search.substring(7);
    const apiKey = "xcqoxk9hj3p0x2siupzb2ko7tvl4codedtk4aiww";
    const rss2JsonApi = `https://api.rss2json.com/v1/api.json?api_key=${apiKey}&rss_url=${feedUrl}`;

    axios
      .get(rss2JsonApi)
      .then(res => {
        this.setState({
          episodes: res.data.items,
          feedDescr: res.data.feed.description,
          feedTitle: res.data.feed.title,
          feedAuthor: res.data.feed.author,
          feedImg: res.data.feed.image,
          currEpisodeUrl: res.data.items[0].enclosure.link,
          currEpisodeTitle: res.data.items[0].title,
          loaded: true
        });
      })

      .catch(er => {
        this.setState({
          error: true
        });
      });
  }
}
