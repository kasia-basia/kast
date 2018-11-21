import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import NotFound from '../components/NotFound';


export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    componentDidMount() {

        const podcastApi = `https://itunes.apple.com/search?term=${this.props.match.params.query}&media=podcast`;

        axios.get(podcastApi)
            .then(res => {
                this.setState({
                    results: res.data.results,
                });
                console.log(res);
            })

            .catch((er) => console.log(er));
    }

    render() {
        if (!this.state.results[0]) {
            return <NotFound/>;
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
                <h2 className={'searchRes-heading'}><span>Search results</span> for:{this.props.searched} </h2>
                <div className={'searchRes-list'}>
                    {viewResults}
                </div>
            </div>
        )
    }
}

