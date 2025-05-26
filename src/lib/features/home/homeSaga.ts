import { call, put, takeLatest, race, delay } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "", 10);

// api
import { getHomeData, searchHomePage } from "./homeApiFunctions";

// actions
import {
  getHomeDataRequest,
  getHomeDataLoading,
  getHomeDataSuccess,
  getHomeDataFail,
  searchHomePageRequest,
  searchHomePageLoading,
  searchHomePageSuccess,
  searchHomePageFail,
} from "./homeSlice";

// grouping and exporting all home sagas
export const homeSagas = [
  takeLatest(getHomeDataRequest.type as any, watchGetHomeDataRequest),
  takeLatest(searchHomePageRequest.type as any, watchSearchHomePageRequest),
];

function* watchGetHomeDataRequest({ payload }: any) {
  try {
    yield put(getHomeDataLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getHomeData),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback
      yield put(getHomeDataSuccess(data));
    } else {
      yield put(
        getHomeDataFail({
          message:
            (message &&
              ((typeof message === "string" && message) ||
                Object.values(message).join(" "))) ||
            null,
        })
      );
    }
  } catch (e) {
    // put some user feedback
    // fail
    yield put(
      getHomeDataFail({
        message: null,
      })
    );
  }
}

function* watchSearchHomePageRequest({ payload }: any) {
  try {
    yield put(searchHomePageLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(searchHomePage, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback
      yield put(searchHomePageSuccess((data && data.results) || []));
    } else {
      yield put(
        searchHomePageFail({
          message:
            (message &&
              ((typeof message === "string" && message) ||
                Object.values(message).join(" "))) ||
            null,
        })
      );
    }
  } catch (e) {
    // put some user feedback
    // fail
    yield put(
      searchHomePageFail({
        message: null,
      })
    );
  }
}
