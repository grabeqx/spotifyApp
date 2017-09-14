import ACTIONS from '../constants/actions';


function currenAlbumReducer(state = {}, action) {

    switch(action.type) {
        
        case ACTIONS.SET_ALBUM:
            state = {
                ...state, 
                album: action.payload
            }
            return state;
        case ACTIONS.GET_ALBUM_TRACKS_SUCCESS:
            state = {
                ...state,
                tracks: action.payload
            }
            return state;
        default:
            return state;
    
    }
}

function designReducer(state={}, action) {

    switch(action.type) {

        case ACTIONS.SET_ALBUM: 
            state = {
                ...state,
                topBg: action.payload.images[0].url
            }
            return state;

        case ACTIONS.UPDATE_BG:
        console.log(action.payload);
            state = {
                ...state,
                topBg: action.payload
            }
            return state;

        default: 
            return state

    }

}


function AppReducer(state = {
    currentAlbum: {
        album: {},
        tracks: []
    },
    design: {
        topBg: {}
    },
    currentTrack: {}
}, action) {

    return {
        ...state,
        currentAlbum: currenAlbumReducer(state.currentAlbum, action),
        design: designReducer(state.design, action)
    }
      
}

export default AppReducer;