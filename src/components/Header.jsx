import React from 'react';
import banner from '../img/header.png'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            q: e.currentTarget.value,
        });
    };

    render() {

        return (
            <>
                <div className={'header'}>
                    <Link to='/'><h1 className={'header-logo'}>KAST</h1></Link>
                    <div className={'header-searchbar'}>
                        <form className={'header-form'} action="">
                            <FontAwesomeIcon style={{color: '#4654D5', position:'absolute', left: '15px'}}icon="search"/>
                            <input onChange={this.handleInput} type="text"/>
                            <Link to={`/search/${this.state.q}`}>
                                <button className={'header-button'}>GO</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <img className={'header-banner'} src={banner} alt='Header-illustration'/>
            </>
        )
    }
}