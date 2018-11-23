import React from 'react';
import StaffPicks from "./StaffPicks";
import BrowseCategory from './BrowseCategory'

export default class Home extends React.Component {

    staffPicks = [
        {
            name: '99% Invisible',
            img: 'https://f.prxu.org/96/images/a2dfa88e-cbe9-4a41-b1a6-72694e60e7fd/99-1400.png',
            link: '/podcast/?query=http://feeds.99percentinvisible.org/99percentinvisible'
        },
        {
            name: 'Criminal',
            img: 'https://f.prxu.org/criminal/images/d0289e32-97a1-485d-a1e1-cd47119dbcf4/CRIMINAL_LOGOS_FINAL_wt_sq.png',
            link: '/podcast/?query=http://feeds.thisiscriminal.com/CriminalShow'
        },
        {
            name: 'Serial',
            img: 'https://serialpodcast.org/sites/all/modules/custom/serial/img/serial-itunes-logo.png',
            link: '/podcast/?query=http://feeds.serialpodcast.org/serialpodcast',
        },
        {
            name: 'This is Love',
            img: 'https://f.prxu.org/119/images/6c4fc5cd-3696-4501-8726-203769119b4c/LOVE_Season_2_Working_Logo_BLKpng_1_.png',
            link: '/podcast/?query=http://feeds.thisiscriminal.com/thisislovepodcast',
        },
        {
            name: 'Radiolab',
            img: 'https://media.wnyc.org/i/raw/1/Radiolab_WNYCStudios_1400_2dq02Dh.png',
            link: '/podcast/?query=http://feeds.wnyc.org/radiolab',
        },
    ];

    render() {

        const staffPicks = this.staffPicks.map((e,i)=>{
            return <StaffPicks key={i} name={e.name} img={e.img} link={e.link}/>
        });

        return (
            <div className={'container'}>
                <div className={'home-container'}>
                    <h1 className={'home-header'}>FIND <span>podcasts</span></h1>
                </div>

                <h2 className={'home-sp-heading'}>Staff picks</h2>
                <div className={'home-sp-container'}>
                {staffPicks}

                </div>
                <BrowseCategory/>
            </div>
        )
    }
}