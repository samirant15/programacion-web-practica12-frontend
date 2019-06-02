import { translations } from "../../utils/language";

export const getTranslated = (data) => {
  return translations[data.lang.substring(0, 2)];
}
