import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
// import NotFound from '../components/NotFound';
import Loader from '../components/Loader'
import Error from '../components/Error'
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
            return <Error/>
        }

        if(this.state.resultCount === 0){
            return <NotFound zeroResults={true}/>
        }

        if (!this.state.loaded) {
            return <Loader/>;
        }



        let viewResults = this.state.results.map((e, i) =>
            <div key={i} className={'searchRes-result'}>
                <div><img className={'searchRes-img'} alt='' src={e.artworkUrl100}/></div>
                <div className={'searchRes-content'}>
                    <Link className={'searchRes-link'} to={`/podcast/?query=${e.feedUrl}`}>
                        <h3 className={'searchRes-title'}>{e.collectionName}</h3>
                    </Link>
                    <p className={'searchRes-genres'}>{e.genres.join(' | ')}</p>
                </div>
            </div>
        );

        return (
            <div className={'container'}>

                {this.props.match.url.includes('category')
                    ? <h2 className={'searchRes-heading'}><span>{this.props.match.params.id.slice(0, -5)}</span></h2>
                    : <h2 className={'searchRes-heading'}><span>Search results</span> for "{this.props.match.params.query}"</h2>
                }

                <div className={'searchRes-list'}>
                    {viewResults}
                </div>
            </div>
        )

    }

    componentDidMount() {
        const podcastApi = this.props.match.url.includes('category')
            ? `https://itunes.apple.com/search?term=podcast&genreId=${this.props.match.params.id.substr(-4)}`
            : `https://itunes.apple.com/search?term=${this.props.match.params.query}&media=podcast`;

        axios.get(podcastApi)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    loaded: true,
                    resultCount: res.data.resultCount
                });
            })

            .catch((er) => {
                console.log(er);
                console.log('hello');
                this.setState({
                    error: true
                })
            });
    }
}

