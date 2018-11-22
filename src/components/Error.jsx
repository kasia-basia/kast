import React from 'react';

export default class Loader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'error-container'}>
                <h2 className={'error-heading'}>Ooops!</h2>
                <h3 className={'error-subheading'}>Looks like something went wrong. </h3>
                <p className={'error-text'}> Sorry! </p>
            </div>

        )
    }
}