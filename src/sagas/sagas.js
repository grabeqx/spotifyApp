import { call, put, takeLatest } from 'redux-saga/effects';
import SpotifyApi from '../actions/spotifyConsoleApi';
import ACTIONS from '../constants/actions';
import actionCreators from '../actions/action.creator';

function* getToken(action) {
    const token = yield call(SpotifyApi.getToken, action.payload);
    yield put({type: ACTIONS.GET_TOKEN_SUCCESS, payload: token});
    const user = yield call(SpotifyApi.getUser);
    yield put({type: ACTIONS.GET_USER, payload: user});
}

function* getNewReleases(action) {
    const albums = yield call(SpotifyApi.getNewReleases);
    yield put({type: ACTIONS.FEATURED_PLAYLISTS_LOADED, payload: albums});
}

function* getAlbumTracks(action) {
    const tracks = yield call(SpotifyApi.getAlbumTracks, action.payload);
    yield put({type: ACTIONS.GET_ALBUM_TRACKS_SUCCESS, payload: tracks});
}

function* SpotifySaga() {
    yield takeLatest(ACTIONS.GET_TOKEN, getToken);
    yield takeLatest(ACTIONS.GET_FEATURED_PLAYLISTS, getNewReleases);
    yield takeLatest(ACTIONS.GET_ALBUM_TRACKS, getAlbumTracks);
}


export default SpotifySaga;