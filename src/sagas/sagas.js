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

function* getPlaylists(action) {
    const playlist = yield call(SpotifyApi.getPlaylists);
    yield put({type: ACTIONS.FEATURED_PLAYLISTS_LOADED, payload: playlist});
}

function* SpotifySaga() {
    yield takeLatest(ACTIONS.GET_TOKEN, getToken);
    yield takeLatest(ACTIONS.GET_FEATURED_PLAYLISTS, getPlaylists);
}


export default SpotifySaga;