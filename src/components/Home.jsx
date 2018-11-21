import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }
   render(){
     return (
         <div className={'container'}>
             <div className={'home-container'}>
                 <h1 className={'home-header'}>Browse podcasts</h1>
             </div>
         </div>

     )
   }
 }