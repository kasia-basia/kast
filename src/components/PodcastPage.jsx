import React from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ReactAudioPlayer from 'react-audio-player';
import ReadMore from '../components/ReadMore'

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
            currEpisodeUrl: '',
            currEpisodeTitle: '',
            loaded: false,
            error: false
        };
    }

    changeEpisode = (e) => {
        this.setState({
            currEpisodeUrl: e.currentTarget.dataset.mp3,
            currEpisodeTitle: e.currentTarget.dataset.title
        });
    };

    render() {
        let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum justo sem. Integer non ipsum dui. Curabitur efficitur, ipsum vitae tincidunt pulvinar, ex lorem ullamcorper magna, eu blandit erat magna vitae est. Aliquam vulputate purus eget auctor vulputate. Morbi neque erat, lobortis quis fermentum sed, ullamcorper vitae est. Cras tincidunt metus vitae quam varius faucibus. Nulla id placerat ante, ut rutrum elit. Fusce vel fermentum ante, quis maximus ante. Sed a purus quis nibh efficitur laoreet et nec nisi. Fusce rhoncus bibendum eros, et bibendum nunc gravida nec. Pellentesque viverra enim dolor, quis gravida nibh volutpat eget. Aliquam eleifend vehicula.'
        let episodes = this.state.episodes.map((e, i) => <div key={i}>
            <h2 onClick={this.changeEpisode} className="podcast-episode-title" data-mp3={e.enclosure.link}
                data-title={e.title}>{e.title}</h2>

            <ReadMore>
                <p className='podcast-episode-descr' dangerouslySetInnerHTML={{__html: `${e.description}`}}/>
            </ReadMore>
            {/*<p className='podcast-episode-descr' dangerouslySetInnerHTML={{__html: `${e.description}`}}/>*/}
        </div>);

        if (this.state.error){
            return <Error/>
        }

        if (!this.state.loaded) {
            return <Loader/>
        }

        if (this.state.loaded) {
            return (
                <div className={'container'}>

                    <div className={'player-container'}>
                        <div className={'player-content'}>
                            <ReactAudioPlayer
                                src={this.state.currEpisodeUrl}
                                controls
                                preload={'auto'}/>
                            <div className={'now-playing'}><span>Now playing:</span>
                                <br/> {this.state.currEpisodeTitle}</div>
                        </div>
                    </div>

                    <div className={'podcast-info'}>
                        <div className={'podcast-img'}><img src={this.state.feedImg} alt=""/></div>
                        <div className={'podcast-info-content'}>
                            <h1 className={'podcast-info-title'}>{this.state.feedTitle}</h1>
                            <span className={'podcast-info-author'}>{this.state.feedAuthor}</span>
                            <p className={'podcast-info-descr'}
                               dangerouslySetInnerHTML={{__html: `${this.state.feedDescr}`}}/>
                        </div>
                    </div>

                    <h2 className={'podcast-heading'}>Recent <span>episodes</span></h2>
                    <div className="podcast-episodes-container">
                        {episodes}
                    </div>
                </div>
            )
        }


    }

    componentDidMount() {
        const feedUrl = this.props.location.search.substring(7);
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
                    currEpisodeUrl: res.data.items[0].enclosure.link,
                    currEpisodeTitle: res.data.items[0].title,
                    loaded: true
                });
            })

            .catch((er) => {
                this.setState({
                    error: true
                })
            });

    }


}