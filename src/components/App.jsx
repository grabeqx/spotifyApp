import React from 'react';
import { Router, Route, Switch } from 'react-router';

import {Nav} from './Nav';
import NewRelases from './NewRelases';
import AlbumDetails from './AlbumDetails';
import UserPlaylistsList from './UserPlaylistsList';
import UserPlaylist from './UserPlaylist';
import Player from './Player';

export class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.appConfig;
    }
    componentWillMount() {
        this.props.actions.initApp();
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.appConfig);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props != nextProps) {
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        return (
            <div>
                <Nav data={this.state}/>
                <div className="container-fluid">
                    <div className="row flex-xl-nowrap main-content">
                        <div className="col-lg-2 col-md-4 sidebar text-white d-none d-md-block">
                            <h3 className="mt-4">Playlists:</h3>
                            <UserPlaylistsList {...this.props}/>
                        </div>
                        <div className="col-lg-10 col-md-8 text-white scroll-y main">
                            <div className="bg-image"><img src={this.props.app.design.topBg}/></div>
                            <Switch>
                                <Route exact path="/" render={props => (<NewRelases {...this.props} />)} />
                                <Route path="/album/:id" render={props => (<AlbumDetails {...this.props} {...props} />)} />
                                <Route path="/playlist/:id" render={props => (<UserPlaylist {...this.props} {...props} />)} />
                            </Switch>
                        </div>
                    </div>
                    <div className="player p-2 pl-2">
                        <Player {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
App.contextTypes = {
    store: React.PropTypes.object
}

export default App;