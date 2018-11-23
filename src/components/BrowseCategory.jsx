import React from 'react';
import {Link} from "react-router-dom";

export default class BrowseCategory extends React.Component {

    categories = [
        {id: 1301, name: 'Art'},
        {id: 1402, name: 'Design'},
        {id: 1303, name: 'Comedy'},
        {id: 1304, name: 'Education'},
        {id: 1305, name: 'Kids & Family'},
        {id: 1307, name: 'Health'},
        {id: 1309, name: 'TV & Film'},
        {id: 1310, name: 'Music'},
        {id: 1311, name: 'News & Politics'},
        {id: 1315, name: 'Science & Medicine'},
        {id: 1316, name: 'Sports & Recreation'},
        {id: 1318, name: 'Technology'},
        {id: 1321, name: 'Business'},
        {id: 1323, name: 'Games & Hobbies'},
        {id: 1324, name: 'Society & Culture'},
        {id: 1325, name: 'Government & Organizations'},
    ];

    render() {

        const categories = this.categories.map((e, i) => {
            return <Link key={i} to={`category/${e.name}-${e.id}`} className={'category-link'}><span>{e.name}</span></Link>
        });

        return (
            <div>
                <h2 className={'home-sp-heading'}>Browse by category</h2>
                <div className={'category-container'}>
                    {categories}
                </div>
            </div>

        )
    }


}