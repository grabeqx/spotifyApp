import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

import { playlistReducer } from './playlistReducer';

function spotifyDataReducer (state = {
    playlists: []
}, action) {

    return {
        ...state,
        playlists: playlistReducer(state.playlists, action)
    }
}

export default spotifyDataReducer;