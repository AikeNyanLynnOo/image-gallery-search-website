import { call, put, takeLatest, race, delay } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "", 10);

// api
import { getUserProfile } from "./userApiFunctions";

// actions
import {
  getUserProfileRequest,
  getUserProfileLoading,
  getUserProfileSuccess,
  getUserProfileFail,
} from "./userSlice";
import toast from "react-hot-toast";

// grouping and exporting all user sagas
export const userSagas = [
  takeLatest(getUserProfileRequest.type as any, watchGetUserProfile),
];

function* watchGetUserProfile() {
  try {
    yield put(getUserProfileLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getUserProfile),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, statusText, success, message, data } = response;

    if (success) {
      // success
      const { profile, _id, email, isVerified, createdAt, updatedAt } = data.user;
      yield put(
        getUserProfileSuccess({
          profile,
          _id,
          email,
          isVerified,
          createdAt,
          updatedAt,
        })
      );
    } else {
      yield put(
        getUserProfileFail({
          error: {
            general: {
              message: data.errors.general || message || "",
            },
          },
        })
      );
      toast.error(data.errors.general || message || "");
    }
  } catch (e) {
    // fail
    yield put(
      getUserProfileFail({
        error: {
          general: "Unknown Error",
        },
      })
    );
    toast.error("Failed to fetch user profile");
  }
} 