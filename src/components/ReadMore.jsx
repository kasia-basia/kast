import React from 'react';

export default class ReadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            height: 0
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    };

    calculateHeight = (e) => {
        this.setState({

        })
    };

    render() {
        return (
            <>
                <div className={ this.state.open? 'read-more-text' : 'read-more-text-blurred' }>
                    {this.props.children}
                </div>
                <button onClick={this.handleToggle} className={'read-more-button'}>
                    {this.state.open? 'Show less' : 'Show more'}
                </button>
            </>
        )
    }

    componentDidMount() {
        console.log(this.state.open)
    }
}