import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';

import FeaturedPlaylist from './components/FeaturedPlaylist';
import SearchComponent from './components/SearchComponent';


class Provider extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <BrowserRouter>
                <App {...this.props}>
                    <Route exact path="/" component={FeaturedPlaylist} />
                    <Route path="/search" component={SearchComponent} />
                </App>
            </BrowserRouter>
        )
    }

}

export default Provider;