import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import actionCreator from './actions/action.creator.js';


const actions = actionCreator();

actions.getToken();


ReactDOM.render(<App appName="SpotifyApp" actions={actions}/>, document.querySelector('#root'));