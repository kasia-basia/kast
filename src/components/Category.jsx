import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import NotFound from '../components/NotFound';
import Loader from '../components/Loader'
// import Error from '../components/Error'

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loaded: false,
            // error : false
        };
    }

    componentDidMount() {

        const podcastApi = `https://itunes.apple.com/search?term=podcast&genreId=${this.props.match.params.id}`;

        axios.get(podcastApi)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    loaded: true
                });
            })

            .catch((er) => {
                this.setState({
                    // error : true
                })
            });
    }

    render() {

        if (!this.state.loaded) {
            return <Loader/>;
        }

        // if(this.state.error){
        //     return <Error/>
        // }

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
                <h2 className={'searchRes-heading'}>Category </h2>
                <div className={'searchRes-list'}>
                    {viewResults}
                </div>
            </div>
        )
    }
}

