import React from 'react';
import sad from "../img/sadFile.png";

export default class NotFound extends React.Component {

    render() {
        return (
            <div className={'notFound-container'}>
                    <div className={'error-img'}><img src={sad} alt=""/></div>
                    <h2 className={'notFound-title'}>
                        { this.props.zeroResults ? 'NOTHING HERE...' : 'NOT FOUND'}
                    </h2>
                    <p className={'notFound-text'}>
                        { this.props.zeroResults ? 'Maybe try searching for something else?' : 'This page does not exist'}
                    </p>
            </div>
        )
    }
}