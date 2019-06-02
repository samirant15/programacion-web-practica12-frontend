import { LOGIN_USER_SUCCESS, FETCH_USER_SUCCESS } from '../../actions/user';
import { stateUsers } from '../../model';

export const reducer = (state = stateUsers, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userLogin: action.payload,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        getAllUsers: action.payload,
      }
    default: {
      return {
        ...state
      }
    }
  }

}
