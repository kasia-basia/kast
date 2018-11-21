import React from 'react';
import Player from 'react-aplayer';
import axios from 'axios';
import Loader from '../components/Loader'


export default class PodcastPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.results,
            episodes: [],
            feedDescr: '',
            feedTitle: '',
            feedAuthor: '',
            feedImg: '',
            currEpisodeUrl: 'https://dts.podtrac.com/redirect.mp3/files.serialpodcast.org/sites/default/files/podcast/096761de819f2d602613d82865e0f9f4/serial-s03-e09.mp3',
            loaded: false
        }
    }

    playEpisode = (e) => {
        this.setState({
            currEpisodeUrl: e.currentTarget.dataset.mp3
        });
        console.log('Hello', this.state.currEpisodeUrl);
    };

    initializePlayer = () => {

    };

    render() {

        let props = {
            theme: '#4654D5',
            audio: [
                {
                    name: this.state.feedTitle,
                    artist: this.state.feedAuthor,
                    url: this.state.currEpisodeUrl,
                    cover: this.state.feedImg,
                    theme: '#4654D5'
                }
            ]
        };

        let episodes = this.state.episodes.map((e, i) => <div key={i}>
            <h2 onClick={this.playEpisode} className="podcast-episode-title" data-mp3={e.enclosure.link}>{e.title}</h2>
            <p className='podcast-episode-descr' dangerouslySetInnerHTML={{__html: `${e.description}`}}/>
        </div>);

        if (this.state.loaded) {
            return (
                <div className={'container'}>
                    <div className={'podcast-player'}><Player {...props} /></div>
                    <div className={'podcast-info'}>
                        <div className={'podcast-img'}><img src={this.state.feedImg} alt=""/></div>
                        <div className={'podcast-info-content'}>
                            <h1 className={'podcast-info-title'}>{this.state.feedTitle}</h1>
                            <span className={'podcast-info-author'}>{this.state.feedAuthor}</span>
                            <p className={'podcast-info-descr'}
                               dangerouslySetInnerHTML={{__html: `${this.state.feedDescr}`}}/>
                        </div>
                    </div>

                    <h2 className={'podcast-heading'}>Recent episodes</h2>
                    <div className="podcast-episodes-container">
                        {episodes}
                    </div>
                </div>
            )
        }
        if (!this.state.loaded) {
            return (
                <Loader/>
            )
        }


    }

    componentDidMount() {
        const feedUrl = this.props.location.search.substring(7);
        console.log(feedUrl);

        const apiKey = 'xcqoxk9hj3p0x2siupzb2ko7tvl4codedtk4aiww';
        const rss2JsonApi = `https://api.rss2json.com/v1/api.json?api_key=${apiKey}&rss_url=${feedUrl}`;
        axios.get(rss2JsonApi)

            .then(res => {
                this.setState({
                    episodes: res.data.items,
                    feedDescr: res.data.feed.description,
                    feedTitle: res.data.feed.title,
                    feedAuthor: res.data.feed.author,
                    feedImg: res.data.feed.image,
                    loaded: true
                });

                console.log(res.data.items);
                // console.log(res.data.feed);
                // console.log(this.state.feedImg);

            })

            .catch((er) => console.log(er));
    }

    componentDidUpdate() {
        console.log('I updated');

    }
}