import React from 'react';
import StaffPicks from "./StaffPicks";

export default class Home extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <div className={'home-container'}>
                    <h1 className={'home-header'}>FIND <span>podcasts</span></h1>
                </div>

                <h2 className={'home-sp-heading'}>Staff picks</h2>

                <div className={'home-sp-container'}>
                    <StaffPicks name={'99% Invisible'} img={'https://f.prxu.org/96/images/a2dfa88e-cbe9-4a41-b1a6-72694e60e7fd/99-1400.png'} link={'/'}/>
                    <StaffPicks name={'Criminal'} img={'https://f.prxu.org/criminal/images/d0289e32-97a1-485d-a1e1-cd47119dbcf4/CRIMINAL_LOGOS_FINAL_wt_sq.png'} link={'/'}/>
                </div>


            </div>

        )
    }
}