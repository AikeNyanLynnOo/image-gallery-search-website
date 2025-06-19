import { call, put, takeLatest, race, delay } from "redux-saga/effects";
import { getCollectionsData } from "./collectionApiFunctions";
import {
  getCollectionsDataRequest,
  getCollectionsDataLoading,
  getCollectionsDataSuccess,
  getCollectionsDataFail,
} from "./collectionSlice";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "10", 10);

function* watchGetCollectionsDataRequest({ payload }: any) {
  try {
    yield put(getCollectionsDataLoading(null));
    const { response, timeout } = yield race({
      response: call(getCollectionsData, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    if (timeout) {
      yield put(
        getCollectionsDataFail({ message: "Request timed out. Please try again." })
      );
      return;
    }
    const { status, success, message, data } = response;
    if (success) {
      yield put(
        getCollectionsDataSuccess({
          ...data,
          restart: payload?.restart || false,
        })
      );
    } else {
      yield put(
        getCollectionsDataFail({
          message:
            (message &&
              ((typeof message === "string" && message) ||
                Object.values(message).join(" "))) ||
            null,
        })
      );
    }
  } catch (e) {
    yield put(
      getCollectionsDataFail({
        message: null,
      })
    );
  }
}

export const collectionSagas = [
  takeLatest(getCollectionsDataRequest.type as any, watchGetCollectionsDataRequest),
]; 