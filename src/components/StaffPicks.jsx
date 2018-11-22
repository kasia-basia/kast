import React from "react";
import {Link} from 'react-router-dom'

export default class StaffPicks extends React.Component {

    render() {
        return (
            <div className={'home-sp-wrapper'}>
                <Link to={this.props.link}>
                    <div><img className={'home-sp-img'} alt='' src={this.props.img}/></div>
                    <h3 className={'home-sp-title'}>{this.props.name}</h3>
                </Link>
            </div>
        )
    }
}
