import ACTIONS from '../constants/actions';

export function playlistReducer(state = [], action) {

    switch(action.type) {
        case ACTIONS.FEATURED_PLAYLISTS_LOADED: 
                
            return {...state, ...action.payload.albums.items}

        default:
            return state;
    }

}