import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

const devMode = process.env.NODE_ENV === "development";

import createSagaMiddleware from "@redux-saga/core";

// slices
import { photoSlice } from "./photo/photoSlice";
import { authSlice } from "./auth/authSlice";
import { userSlice } from "./user/userSlice";
import { homeSlice } from "./home/homeSlice";
import { exploreSlice } from "./explore/exploreSlice";
import { collectionSlice } from "./collection/collectionSlice";

// generator functions
import { photoSagas } from "./photo/photoSaga";
import { authSagas } from "./auth/authSaga";
import { userSagas } from "./user/userSaga";
import { homeSagas } from "./home/homeSaga";
import { exploreSagas } from "./explore/exploreSaga";
import { collectionSagas } from "./collection/collectionSaga";

function* rootSaga() {
  yield all([
    ...photoSagas,
    ...authSagas,
    ...userSagas,
    ...homeSagas,
    ...exploreSagas,
    ...collectionSagas,
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
      [userSlice.name]: userSlice.reducer,
      [homeSlice.name]: homeSlice.reducer,
      [exploreSlice.name]: exploreSlice.reducer,
      [collectionSlice.name]: collectionSlice.reducer,
    },
    devTools: devMode,
    middleware: (() => {
      return middleware;
    }) as any,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
