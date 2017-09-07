import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

function playlistReducer (state = {}, action) {
    var payload = action.payload;

    switch(action.type) {
        case ACTIONS.GET_TOKEN_SUCCESS:
        console.log("playliost");
            return state

        case ACTIONS.GET_USER:
            console.log("playlist");
            return state

        default:
            return state;
    }

    return state;
}

export default playlistReducer;