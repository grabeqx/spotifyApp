const ACTIONS = {
    GET_TOKEN: Symbol('GET_TOKEN'),
    GET_TOKEN_SUCCESS: Symbol('GET_TOKEN_SUCCESS'),
    GET_USER: Symbol('GET_USER'),
    GET_USER_PLAYLISTS: Symbol('GET_USER_PLAYLISTS'),
    GET_FEATURED_PLAYLISTS: Symbol('GET_FEATURED_PLAYLISTS'),
    FEATURED_PLAYLISTS_LOADED: Symbol('FEATURED_PLAYLISTS_LOADED'),
    SET_ALBUM: Symbol('SET_ALBUM'),
    GET_ALBUM_TRACKS: Symbol('GET_ALBUM_TRACKS'),
    GET_ALBUM_TRACKS_SUCCESS: Symbol('GET_ALBUM_TRACKS_SUCCESS'),
    UPDATE_BG: Symbol('UPDATE_BG'),
    GET_PLAYLIST_TRACKS: Symbol('GET_PLAYLIST_TRACKS'),
    GET_PLAYLIST_TRACKS_SUCCESS: Symbol('GET_PLAYLIST_TRACKS_SUCCESS'),
    SET_PLAYED_PLAYLIST: Symbol('SET_PLAYED_PLAYLIST'),
    MENAGE_PLAYER: Symbol('MENAGE_PLAYER'),
    PLAY_NEXT: Symbol('PLAY_NEXT'),
    PLAY_PREV: Symbol('PLAY_PREV'),
    STOP_PLAY: Symbol('STOP_PLAY')
};

export default ACTIONS;