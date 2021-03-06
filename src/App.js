// Imports
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PodcastPage from './components/PodcastPage';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
import ScrollToTop from './components/ScrollToTop';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch, faPlay, faPause, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faPlay, faPause, faGlobeAmericas);

// App Component
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/search/:query' component={SearchResults}/>
                            <Route path='/podcast' component={PodcastPage}/>
                            <Route path='/category/:id' component={SearchResults}/>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer/>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default App;
