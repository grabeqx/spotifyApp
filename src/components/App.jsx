import React from 'react';
import { Router, Route, Switch } from 'react-router';

import {Nav} from './Nav';
import SearchComponent from './SearchComponent';
import FeaturedPlaylist from './FeaturedPlaylist';


export class App extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
        return (
            <div>
                <Nav appName="Spotify" />
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={props => (<FeaturedPlaylist {...this.props} />)} />
                        <Route path="/search" render={props => (<SearchComponent {...this.props} />)} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;