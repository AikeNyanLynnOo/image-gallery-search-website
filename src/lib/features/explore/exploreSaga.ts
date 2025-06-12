import { call, put, takeLatest, race, delay } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "", 10);

// api
import { getExploreData } from "./exploreApiFunctions";

// actions
import {
  getExploreDataRequest,
  getExploreDataLoading,
  getExploreDataSuccess,
  getExploreDataFail,
} from "./exploreSlice";

// grouping and exporting all explore sagas
export const exploreSagas = [
  takeLatest(getExploreDataRequest.type as any, watchGetExploreDataRequest),
];

function* watchGetExploreDataRequest({ payload }: any) {
  try {
    yield put(getExploreDataLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getExploreData, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback
      yield put(
        getExploreDataSuccess({
          ...data,
          restart: payload?.restart || false,
        })
      );
    } else {
      yield put(
        getExploreDataFail({
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
      getExploreDataFail({
        message: null,
      })
    );
  }
}
