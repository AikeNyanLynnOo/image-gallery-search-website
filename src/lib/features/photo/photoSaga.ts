import { call, put, takeLatest, race, delay, select } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "", 10);

// api
import { getPublicImages } from "./photoApiFunctions";

// actions
import {
  getImagesRequest,
  getImagesLoading,
  getImagesSuccess,
  getImagesFail,
} from "./photoSlice";

// grouping and exporting all photo sagas
export const photoSagas = [
  takeLatest(getImagesRequest.type as any, watchGetImagesRequest),
];

function* watchGetImagesRequest({ payload }: any) {
  try {
    yield put(getImagesLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getPublicImages, payload.params),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback

      yield put(
        getImagesSuccess({
          total: data.pagination.total,
          totalPages: data.pagination.totalPages,
          photos: data.images,
          restart: payload.restart,
        })
      );
    } else {
      yield put(
        getImagesFail({
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
      getImagesFail({
        message: null,
      })
    );
  }
}
