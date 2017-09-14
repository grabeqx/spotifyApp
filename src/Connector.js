import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from './actions/action.creator.js';

import App from './components/App.jsx';

function mapStateToProps (state) {
    return {
        appConfig: state.AppConfigReducer,
        spotify: state.SpotifyDataReducer,
        app: state.AppReducer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(App);

export default Connector;