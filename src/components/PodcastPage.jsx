import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Episode from "./Episode";
import PodcastGeneralInfo from "./PodcastGeneralInfo";
import Player from "./Player";
import RecentEpisodes from "./RecentEpisodes";

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
        <>
          <Player currEpisodeTitle={currEpisodeTitle} currEpisodeUrl={currEpisodeUrl} />
          <div className={"container"}>
            <PodcastGeneralInfo feedImg={feedImg} feedTitle={feedTitle} feedAuthor={feedAuthor} feedDescr={feedDescr} />
            <RecentEpisodes>{episodes}</RecentEpisodes>
          </div>
        </>
      );
    }
  }

  componentDidMount() {
    const feedUrl = this.props.location.search.substring(7);
    const apiKey = "xcqoxk9hj3p0x2siupzb2ko7tvl4codedtk4aiww";
    const rss2JsonApi = `https://api.rss2json.com/v1/api.json?api_key=${apiKey}&rss_url=${feedUrl}`;
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

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
