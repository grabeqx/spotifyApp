import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

import { newReleasesReducer } from './newReleasesReducer';

function spotifyDataReducer (state = {
    newReleases: []
}, action) {

    return {
        ...state,
        newReleases: newReleasesReducer(state.newReleases, action)
    }
}

export default spotifyDataReducer;