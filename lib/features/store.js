import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

const devMode = process.env.NODE_ENV === "development";

import createSagaMiddleware from "@redux-saga/core";

// slices
import { photoSlice } from "./photo/photoSlice";

// generator functions
import { photoSagas } from "./photo/photoSaga";

function* rootSaga() {
  yield all([
    ...photoSagas,
    // add more sagas
  ]);
}
// creating saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (devMode) {
  // middleware.push(logger);
}

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [photoSlice.name]: photoSlice.reducer,
    },
    devTools: devMode,
    middleware: () => {
      return middleware;
    },
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.sagaTask.toPromise();
  return store;
};
