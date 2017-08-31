import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';

import {Nav} from './Nav';
import FeaturedPlaylist from './FeaturedPlaylist';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
    }

    getChildContext() {
        return {
            actions: this.props.actions,
            state: this.state
        }
    }
	
    
    render() {
        return (
            <div>
                <Nav appName={this.state.appName} menuLinks={this.state.menuLinks}/>
                <div className="container">
                    <FeaturedPlaylist />
                </div>
            </div>
        )
    }
}

App.childContextTypes = {
    actions: React.PropTypes.object,
    state: React.PropTypes.object
}

export default App;