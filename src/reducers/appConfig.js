import ACTIONS from '../constants/actions';

function appConfig (state={}, action) {
    var spotifyToken = action.payload;

    switch(action.type) {
        case ACTIONS.GET_TOKEN :
            state = Object.assign(state, spotifyToken);
        return state
    }

    return state;
}

export default appConfig;