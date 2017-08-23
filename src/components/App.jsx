import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';

import {Nav} from './Nav';
import FeaturedPlaylist from './FeaturedPlaylist';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: this.props.appName,
            menuLinks: [
                "Główna",
                "Najciekawsze",
                "Ulubione"
            ]
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

export default App;