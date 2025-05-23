import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

const devMode = process.env.NODE_ENV === "development";

import createSagaMiddleware from "@redux-saga/core";

// slices
import { photoSlice } from "./photo/photoSlice";
import { authSlice } from "./auth/authSlice";

// generator functions
import { photoSagas } from "./photo/photoSaga";
import { authSagas } from "./auth/authSaga";

function* rootSaga() {
  yield all([
    ...photoSagas,
    ...authSagas,
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
      [authSlice.name]: authSlice.reducer,
    },
    devTools: devMode,
    middleware: (() => {
      return middleware;
    }) as any,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
