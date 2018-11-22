import React from 'react';
import {Link} from "react-router-dom";

export default class BrowseCategory extends React.Component {

   render(){
     return (
         <div>
             <h2 className={'home-sp-heading'}>Browse by category</h2>

             <div className={'category-container'}>
             <Link to={'category/1301'} className={'category-link'}>Art</Link>
             <Link to={'category/1406'} className={'category-link'}>Design</Link>
             <Link to={'category/1303'} className={'category-link'}>Comedy</Link>
             <Link to={'category/1304'} className={'category-link'}>Education</Link>
             <Link to={'category/1305'} className={'category-link'}>Kids & Family</Link>
             <Link to={'category/1307'} className={'category-link'}>Health</Link>
             <Link to={'category/1309'} className={'category-link'}>TV & Film</Link>
             <Link to={'category/1310'} className={'category-link'}>Music</Link>
             <Link to={'category/1311'} className={'category-link'}>News & Politics</Link>
             <Link to={'category/1314'} className={'category-link'}>Religion & Spirituality</Link>
             <Link to={'category/1315'} className={'category-link'}>Science & Medicine</Link>
             <Link to={'category/1316'} className={'category-link'}>Sports & Recreation</Link>
             <Link to={'category/1318'} className={'category-link'}>Technology</Link>
             <Link to={'category/1321'} className={'category-link'}>Business</Link>
             <Link to={'category/1323'} className={'category-link'}>Games & Hobbies</Link>
             <Link to={'category/1324'} className={'category-link'}>Society & Culture</Link>
             <Link to={'category/1325'} className={'category-link'}>Government & Organizations</Link>
             </div>

         </div>

     )
   }


 }