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

function* SpotifySaga() {
    yield takeLatest(ACTIONS.GET_TOKEN, getToken);
}


export default SpotifySaga;