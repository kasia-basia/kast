import React from 'react';
import sad from '../img/sadFile.png'

export default class Loader extends React.Component {

    render() {
        return (
            <div className={'error-container'}>
                <div className={'error-img'}><img src={sad} alt=""/></div>
                <h2 className={'error-heading'}>Ooops!</h2>
                <h3 className={'error-subheading'}>Looks like something went wrong.</h3>
            </div>

        )
    }
}