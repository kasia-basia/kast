// Imports
import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import './App.scss';
import axios from "axios";

// Components
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PodcastPage from './components/PodcastPage';
import Home from './components/Home';

// App Component
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header search={this.searchTerm}/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/search/:query' component={SearchResults}/>
                        <Route path='/podcast' component={PodcastPage} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App ;
