import React from 'react';
import arrow from '../img/arrow.svg';
import Truncate from 'react-truncate-html'

export default class ReadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    };

    render() {
        const isOpened = this.state.open;
        let description;

        if (isOpened) {
            description = (
                <p dangerouslySetInnerHTML={{
                __html: this.props.text}}/>
            );
        } else {
            description = (
                <Truncate lines={4}
                          dangerouslySetInnerHTML={{
                              __html: this.props.text
                          }}>
                </Truncate>
            );
        }

        const button = (
            <button onClick={this.handleToggle} className={'read-more-button'}>
                {this.state.open ? 'Show less' : 'Show more'}
                <img alt={'direction arrow'} src={arrow} className={'read-more-arrow'} style={{
                    transform: `rotate( ${this.state.open ? '-180deg' : '0'})`
                }}/>
            </button>
        );

        return (
            <div className={'description-container'}>

                {description}

                {this.props.text.length > 450 ? button : null}

            </div>


        )
    }


}