import React from 'react';

export default class Loader extends React.Component {

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