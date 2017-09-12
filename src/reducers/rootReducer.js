import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appConfigReducer from './appConfigReducer';
import spotifyDataReducer from './spotifyDataReducer';

var reducers = {appConfigReducer, spotifyDataReducer}

const rootReducer = combineReducers({
    appConfigReducer,
    spotifyDataReducer,
    router: routerReducer
});

export default rootReducer;