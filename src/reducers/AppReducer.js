import ACTIONS from '../constants/actions';


function currenAlbumReducer(state = {}, action) {

    switch(action.type) {
        
        case ACTIONS.SET_ALBUM:
            state = {...state, ...action.payload}
            return state;
        default:
            return state;
    
    }
}


function AppReducer(state = {
    currentAlbum: {
        album: {},
        tracks: []
    },
    currentTrack: {}
}, action) {

    switch(action.type) {

        case ACTIONS.SET_ALBUM:
            state.currentAlbum = currenAlbumReducer(state.currentAlbum, action);
            return state;

        default: 
            return state;

    }
}

export default AppReducer;