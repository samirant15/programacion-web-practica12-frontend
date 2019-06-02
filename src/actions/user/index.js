export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export const fetchUsers = () => ({
  type: FETCH_USER_REQUEST,
})

export const loginUser = (data) => ({
  type: LOGIN_USER_REQUEST,
  payload: { userLogin: data }
})
