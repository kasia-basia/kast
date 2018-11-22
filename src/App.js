// Imports
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PodcastPage from './components/PodcastPage';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'

// App Component
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <div>
                        <Header search={this.searchTerm}/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/search/:query' component={SearchResults}/>
                            <Route path='/podcast' component={PodcastPage}/>
                        </Switch>
                        <Footer/>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default App;
