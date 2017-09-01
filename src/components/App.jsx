import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';

import {Nav} from './Nav';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
    }
	
    render() {
        return (
            <div>
                <Nav appName={this.state.appName} menuLinks={this.state.menuLinks}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;