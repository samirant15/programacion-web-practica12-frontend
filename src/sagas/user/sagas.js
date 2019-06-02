import { takeLatest, all, call, put } from 'redux-saga/effects';
import { push } from "connected-react-router";
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../../actions/user';
import { loginUser, fetchUser } from '../../services/user';

function* loginUserSaga(action) {
    try {
        const response = yield call(loginUser, action.payload.userLogin);
        yield put({ type: LOGIN_USER_SUCCESS, payload: response })

        let auth = {
            token: response.access_token,
            isAuth: true
        }

        localStorage.setItem("departmentsUser", JSON.stringify(auth));

        const location = {
            pathname: '/'
        }

        yield put(push(location));
    } catch (e) {
        console.log(e);
    }
}

function* fetchUserSaga() {
    try {
        const response = yield call(fetchUser);

        yield put({ type: FETCH_USER_SUCCESS, payload: response.data })

        console.log(response, 'saga');
    } catch (e) {
        console.log(e);
    }
}

export default function* sagas() {
    yield all([
        yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga),
        yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
    ])
}


