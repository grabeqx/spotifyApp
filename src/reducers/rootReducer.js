import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appConfigReducer from './appConfigReducer';
import playlistReducer from './playlistReducer';

var reducers = {appConfigReducer, playlistReducer}

const rootReducer = combineReducers({
    appConfigReducer,
    playlistReducer,
    router: routerReducer
});

export default rootReducer;