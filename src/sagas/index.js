import { default as userSaga } from './user/sagas';

const sagas = [
    userSaga,
]

export const combinedSagas = (sagaMiddleware) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));