import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import SpotifySaga from '../sagas/sagas';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/rootReducer';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore
    (rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(historyMiddleware, sagaMiddleware)
);

sagaMiddleware.run(SpotifySaga);

export default store;