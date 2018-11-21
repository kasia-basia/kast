import React from 'react';

export default class Loader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'loader-container'}>
                <h2 className={'loader-text'}>Loading</h2>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>

        )
    }
}