import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import SearchResult from "./SearchResult";
import NotFound from "./NotFound";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loaded: false,
      error: false
    };
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }

    if (this.state.resultCount === 0) {
      return <NotFound zeroResults={true} />;
    }

    if (!this.state.loaded) {
      return <Loader />;
    }

    let allResults = this.state.results.map((e, i) => (
      <SearchResult key={i} artwork={e.artworkUrl100} url={e.feedUrl} collection={e.collectionName} genres={e.genres} />
    ));

    return (
      <div className={"container"}>
        {this.props.match.url.includes("category") 
            ? (
              <h2 className={"searchRes-heading"}>
                <span>{this.props.match.params.id.slice(0, -5)}</span>
              </h2>
            ) 
            : (
              <h2 className={"searchRes-heading"}>
                <span>Search results</span> for "{this.props.match.params.query}"
              </h2>
            )
        }
        <div className={"searchRes-list"}>{allResults}</div>
      </div>
    );
  }

  componentDidMount() {
    const podcastApi = this.props.match.url.includes("category")
      ? `https://itunes.apple.com/search?term=podcast&genreId=${this.props.match.params.id.substr(-4)}`
      : `https://itunes.apple.com/search?term=${this.props.match.params.query}&media=podcast`;

    axios
      .get(podcastApi, { headers: { crossDomain: true, "Content-Type": "application/json" } })
      .then(res => {
        this.setState({
          results: res.data.results,
          loaded: true,
          resultCount: res.data.resultCount
        });
      })

      .catch(er => {
        console.log(er);
        this.setState({
          error: true
        });
      });
  }
}
