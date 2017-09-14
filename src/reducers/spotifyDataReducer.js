import ACTIONS from '../constants/actions';

function newReleasesReducer(state = [], action) {
    
    switch(action.type) {
        
        case ACTIONS.FEATURED_PLAYLISTS_LOADED: 
            return [...state, ...action.payload.albums.items]

        default:
            return state;
    }

}

function SpotifyDataReducer (state = {
    newReleases: []
}, action) {

    return {
        ...state,
        newReleases: newReleasesReducer(state.newReleases, action)
    }
}

export default SpotifyDataReducer;