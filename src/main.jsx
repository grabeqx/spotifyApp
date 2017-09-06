import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import store, { history } from './stores/Appstore.js';

import Connector from './Connector.js';


ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={Connector} />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'));