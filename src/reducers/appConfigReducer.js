import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

function appConfigReducer (state = {
    clientId: SPOTIFY.CLINET_ID,
    appName: "SpotifyApp",
    user: {},
    token: ""
}, action) {
    var payload = action.payload;

    switch(action.type) {
        case ACTIONS.GET_TOKEN_SUCCESS:
            return { ...state, token: payload};

        case ACTIONS.GET_USER:
            var user = {
                id: payload.id,
                display_name: payload.display_name,
                image: payload.images[0].url
            }
            return {...state, user}

        default:
            return state;
    }

    return state;
}

export default appConfigReducer;