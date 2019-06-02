import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    //UserReducers
    userReducer,

    //Routes
    router: connectRouter(history),
})