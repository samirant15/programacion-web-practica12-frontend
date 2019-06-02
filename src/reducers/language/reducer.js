import { LANGUAGE_SUCCESS } from "../../actions/language";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LANGUAGE_SUCCESS:
      return {
        ...state,
        getAllTexts: payload
      }
    default:
      return state
  }
}
