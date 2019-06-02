import { LANGUAGE_SUCCESS } from "../../actions/language";
import { stateLanguage } from '../../model';

export const reducer = (state = stateLanguage, { type, payload }) => {
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
