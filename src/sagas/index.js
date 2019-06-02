import { default as userSaga } from './user/sagas';
import { default as languageSaga } from './language';

const sagas = [
  userSaga,
  languageSaga
]

export const combinedSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
