import React from "react";
import T from "prop-types";
import {Link} from 'react-router-dom'

const StaffPicks = ({link, img, name}) => (
    <div className={'home-sp-wrapper'}>
        <Link to={link}>
            <div><img className={'home-sp-img'} alt='' src={img}/></div>
            <h3 className={'home-sp-title'}><span>{name}</span></h3>
        </Link>
    </div>
);

StaffPicks.propTypes = {
    link: T.string,
    img: T.string,
    name: T.string
};

export default StaffPicks;
