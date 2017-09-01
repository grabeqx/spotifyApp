import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './Provider';
import actionCreator from './actions/action.creator.js';
import {dispatcher,dispatch} from './appDispatcher.js';
import AppStore from './stores/Appstore.js';

const actions = actionCreator(dispatch);

dispatcher.register(function(action){
    AppStore.dispatch(action);
});

ReactDOM.render(<Provider store={AppStore} actions={actions} />, document.querySelector('#root'));