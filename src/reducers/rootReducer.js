import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appConfig from './appConfig';

const rootReducer = combineReducers({
    appConfig,
    router: routerReducer
});

export default rootReducer;