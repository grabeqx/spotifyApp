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
        case ACTIONS.GET_PLAYLIST_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.payload
            }
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
            state = {
                ...state,
                topBg: action.payload
            }
            return state;

        default: 
            return state

    }

}

function userPLaylistsReducer(state=[], action) {

    switch(action.type) {
        case ACTIONS.GET_USER_PLAYLISTS:
            return [
                ...state,
                ...action.payload.items
            ];
        default:
            return state;

    }

}

function playerReducer(state={}, action) {
    
    switch(action.type) {
        case ACTIONS.SET_PLAYED_PLAYLIST:
            return {
                ...state,
                played: true,
                playedTrack: action.payload.playedTrack,
                playedIndex: action.payload.playedIndex,
                playlist: [...action.payload.playlist]
            }

        case ACTIONS.MENAGE_PLAYER:
            return {
                ...state,
                played: action.payload
            }

        case ACTIONS.PLAY_NEXT:
            return {
                ...state,
                playedTrack: action.payload.playedTrack,
                playedIndex: action.payload.playedIndex
            }

        case ACTIONS.PLAY_PREV:
            return {
                ...state,
                playedTrack: action.payload.playedTrack,
                playedIndex: action.payload.playedIndex
            }

        case ACTIONS.STOP_PLAY:
            return {
                ...state,
                played: action.payload,
                playedIndex: -1
            }
        default:
            return state;

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
    userPLaylists: [],
    player: {
        played: false,
        playedTrack: {},
        playedIndex: 0,
        playlist: []
    }
}, action) {

    return {
        ...state,
        currentAlbum: currenAlbumReducer(state.currentAlbum, action),
        design: designReducer(state.design, action),
        userPLaylists: userPLaylistsReducer(state.userPLaylists, action),
        player: playerReducer(state.player, action)
    }
      
}

export default AppReducer;