import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from './actions/action.creator.js';

import App from './components/App.jsx';

function mapStateToProps (state) {
    return {
        appConfig: state.appConfigReducer,
        spotify: state.spotifyDataReducer
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(App);

export default Connector;