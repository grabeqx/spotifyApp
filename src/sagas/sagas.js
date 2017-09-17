import { call, put, takeLatest } from 'redux-saga/effects';
import SpotifyApi from '../actions/spotifyConsoleApi';
import ACTIONS from '../constants/actions';
import actionCreators from '../actions/action.creator';

function* initApp(action) {
    const token = yield call(SpotifyApi.initApp, action.payload);
    yield put({type: ACTIONS.GET_TOKEN_SUCCESS, payload: token});
    const user = yield call(SpotifyApi.getUser);
    yield put({type: ACTIONS.GET_USER, payload: user});
    const userPlaylists = yield call(SpotifyApi.getUserPlaylist);
    yield put({type: ACTIONS.GET_USER_PLAYLISTS, payload: userPlaylists})
}

function* getNewReleases(action) {
    const albums = yield call(SpotifyApi.getNewReleases);
    yield put({type: ACTIONS.FEATURED_PLAYLISTS_LOADED, payload: albums});
}

function* getAlbumTracks(action) {
    const tracks = yield call(SpotifyApi.getAlbumTracks, action.payload);
    yield put({type: ACTIONS.GET_ALBUM_TRACKS_SUCCESS, payload: tracks});
}
function* getPlaylistTracks(action) {
    const tracks = yield call(SpotifyApi.getPlaylistTracks, action.payload);
    yield put({type: ACTIONS.GET_PLAYLIST_TRACKS_SUCCESS, payload: tracks});
}

function* SpotifySaga() {
    yield takeLatest(ACTIONS.GET_TOKEN, initApp);
    yield takeLatest(ACTIONS.GET_FEATURED_PLAYLISTS, getNewReleases);
    yield takeLatest(ACTIONS.GET_ALBUM_TRACKS, getAlbumTracks);
    yield takeLatest(ACTIONS.GET_PLAYLIST_TRACKS, getPlaylistTracks);
}


export default SpotifySaga;