import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { reducer as languageReducer } from './language/reducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    //UserReducers
    userReducer,

    languageReducer,

    //Routes
    router: connectRouter(history),
})