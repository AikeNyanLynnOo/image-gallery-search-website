import { call, put, takeLatest, race, delay } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC, 10);
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

// api
import { login } from "./authApiFunctions";

// actions
import {
  loginRequest,
  loginLoading,
  loginSuccess,
  loginFail,
} from "./authSlice";
import { setCookie } from "cookies-next";

// grouping and exporting all auth sagas
export const authSagas = [takeLatest(loginRequest.type, watchLoginRequest)];

function* watchLoginRequest({ payload }) {
  try {
    yield put(loginLoading());

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(login, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, statusText, success, message, data } = response;

    if (success) {
      // success
      // put user feedback

      setCookie(ACCESS_TOKEN, data.accessToken, {
        maxAge: 1 * 60 * 60, // 1 hour
      });
      setCookie(REFRESH_TOKEN, data.refreshToken, {
        maxAge: 7 * 60 * 60 * 24, // 7 days
      });

      yield put(loginSuccess());
    } else {
      yield put(
        loginFail({
          error: {
            general: {
              message: statusText,
            },
            firstName: {
              message: data.errors.firstName || "",
            },
            lastName: {
              message: data.errors.lastName || "",
            },
            email: {
              message: data.errors.email || "",
            },
            password: {
              message: data.errors.password || "",
            },
          },
        })
      );
    }
  } catch (e) {
    // put some user feedback
    // fail
    console.log("Error>>", e);
    yield put(
      loginFail({
        error: {
          general: "Unknown Error",
        },
      })
    );
  }
}
