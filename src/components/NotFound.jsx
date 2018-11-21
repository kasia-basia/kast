import React from 'react';

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'notFound-container'}>
                <h2 className={'notFound-title'}>Not Found...</h2>
                <p className={'notFound-text'}>Try searching for something else</p>
            </div>

        )
    }
}