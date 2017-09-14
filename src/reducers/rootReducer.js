import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AppConfigReducer from './AppConfigReducer';
import SpotifyDataReducer from './SpotifyDataReducer';
import AppReducer from './AppReducer';


var reducers = {AppConfigReducer, SpotifyDataReducer}

const rootReducer = combineReducers({
    AppConfigReducer,
    SpotifyDataReducer,
    AppReducer,
    router: routerReducer
});

export default rootReducer;