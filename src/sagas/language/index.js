import { takeLatest, all, call, put } from 'redux-saga/effects';
import { push } from "connected-react-router";
import { LANGUAGE_REQUEST, LANGUAGE_SUCCESS } from '../../actions/language';
import { getTranslated } from '../../services/language/languageService';

function* getLanguageSaga(action) {
  try {

    const response = call(getTranslated, action.payload);

    console.log(response);

    yield put({ type: LANGUAGE_SUCCESS })
  } catch (e) {
    console.log(e);
  }
}

export default function* sagas() {
  yield all([
    yield takeLatest(LANGUAGE_REQUEST, getLanguageSaga),
  ])
}


