import { call, put, takeLatest, race, delay, select } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC, 10);

// api
import { getPhotos } from "@/lib/helpers/apiFunctions";

// actions
import {
  getPhotosRequest,
  getPhotosLoading,
  getPhotosSuccess,
  getPhotosFail,
} from "./photoSlice";

// grouping and exporting all login sagas
export const photoSagas = [
  takeLatest(getPhotosRequest.type, watchGetPhotosRequest),
];

function* watchGetPhotosRequest({ payload }) {
  const { page } = yield select((state) => state.photo);
  payload.params.page = page;
  try {
    yield put(getPhotosLoading());

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getPhotos, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback

      if (payload.params.collection) {
        yield put(
          getPhotosSuccess({
            total: data.length, // default
            totalPages: data.length / payload.per_page,
            photos: data,
            restart: payload.restart,
          })
        );
      } else {
        yield put(
          getPhotosSuccess({
            total: data.total,
            totalPages: data.total_pages,
            photos: data.results,
            restart: payload.restart,
          })
        );
      }
    } else {
      yield put(
        getPhotosFail({
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
      getPhotosFail({
        message: null,
      })
    );
  }
}
