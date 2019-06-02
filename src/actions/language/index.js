export const LANGUAGE_REQUEST = 'LANGUAGE_REQUEST';
export const LANGUAGE_SUCCESS = 'LANGUAGE_SUCCESS';

export const getLanguage = (data) => ({
  type: LANGUAGE_REQUEST,
  payload: data,
})
