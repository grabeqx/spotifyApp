import React from 'react';
import { Router, Route, Switch } from 'react-router';

import {Nav} from './Nav';
import SearchComponent from './SearchComponent';
import NewRelases from './NewRelases';
import AlbumDetails from './AlbumDetails';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.appConfig;
    }
    componentWillMount() {
        this.props.actions.getToken();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.appConfig != this.state)
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
                        <div className="col-md-2 sidebar text-white">
                            lorem
                        </div>
                        <div className="col-md-10 text-white scroll-y main">
                            <div className="bg-image"><img src={this.props.app.design.topBg}/></div>
                            <Switch>
                                <Route exact path="/" render={props => (<NewRelases {...this.props} />)} />
                                <Route path="/search" render={props => (<SearchComponent {...this.props} />)} />
                                <Route path="/album/:id" render={props => (<AlbumDetails {...this.props} {...props} />)} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;