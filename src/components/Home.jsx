import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'container'}>
                <div className={'home-container'}>
                    <h1 className={'home-header'}>FIND<span> podcasts</span></h1>
                </div>

                <h2 className={'home-sp-heading'}>Staff picks</h2>

                <div className={'home-sp-container'}>
                    <div><img className={'home-sp-img'}
                              src={`https://f.prxu.org/96/images/a52a20dd-7b8e-46be-86a0-dda86b0953fc/99-300.png`}/>
                    </div>
                    <div className={'home-sp-content'}>
                        <h3>99% Invisible</h3>
                        <p>Design is everywhere in our lives, perhaps most importantly in the places where we've just
                            stopped noticing. 99% Invisible is a weekly exploration of the process and power of design
                            and architecture. From award winning producer Roman Mars. Learn more at
                            99percentinvisible.org.

                            A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.</p>
                    </div>
                </div>


                <div className={'home-sp-container'}>
                    <div><img className={'home-sp-img'}
                              src={`https://f.prxu.org/96/images/a52a20dd-7b8e-46be-86a0-dda86b0953fc/99-300.png`}/>
                    </div>
                    <div className={'home-sp-content'}>
                        <h3>99% Invisible</h3>
                        <p>Design is everywhere in our lives, perhaps most importantly in the places where we've just
                            stopped noticing. 99% Invisible is a weekly exploration of the process and power of design
                            and architecture. From award winning producer Roman Mars. Learn more at
                            99percentinvisible.org.

                            A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.</p>
                    </div>
                </div>


            </div>

        )
    }
}