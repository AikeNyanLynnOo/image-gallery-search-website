import { call, put, takeLatest, race, delay } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "", 10);
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN || "";

// api
import { signup, login, refreshToken } from "./authApiFunctions";

// actions
import {
  loginRequest,
  loginLoading,
  loginSuccess,
  loginFail,
  signupRequest,
  signupLoading,
  signupSuccess,
  signupFail,
  refreshTokenRequest,
  refreshTokenLoading,
  refreshTokenSuccess,
  refreshTokenFail,
} from "./authSlice";
import { setCookie } from "cookies-next";
import { extractMessage } from "@/lib/helpers/helperFunctions";
import toast from "react-hot-toast";

// grouping and exporting all auth sagas
export const authSagas = [
  takeLatest(loginRequest.type as any, watchLoginRequest),
  takeLatest(signupRequest.type as any, watchSignupRequest),
  takeLatest(refreshTokenRequest.type as any, watchRefreshTokenRequest),
];

function* watchLoginRequest({ payload }: any) {
  try {
    yield put(loginLoading(null));

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
      } as any);
      setCookie(REFRESH_TOKEN, data.refreshToken, {
        maxAge: 7 * 60 * 60 * 24, // 7 days
      } as any);

      toast.success(message);
      yield put(loginSuccess(null));
    } else {
      yield put(
        loginFail({
          error: {
            general: {
              message: data.errors.general || message || "",
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
    yield put(
      loginFail({
        error: {
          general: "Unknown Error",
        },
      })
    );
  }
}

function* watchSignupRequest({ payload }: any) {
  try {
    yield put(signupLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(signup, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, statusText, success, message, data } = response;

    if (success) {
      // success
      // put user feedback
      toast.success(message);
      yield put(signupSuccess(null));
    } else {
      if (Array.isArray(data.errors)) {
        // validation errors
        toast.error(message || "");
        yield put(
          signupFail({
            error: {
              general: {
                message: message || "",
              },
              firstName: {
                message: extractMessage({
                  key: "firstName",
                  data: data.errors || [],
                }),
              },
              lastName: {
                message: extractMessage({
                  key: "lastName",
                  data: data.errors || [],
                }),
              },
              email: {
                message: extractMessage({
                  key: "email",
                  data: data.errors || [],
                }),
              },
              password: {
                message: extractMessage({
                  key: "password",
                  data: data.errors || [],
                }),
              },
            },
          })
        );
        return;
      }
      toast.error(data.errors.general || message || "");
      yield put(
        signupFail({
          error: {
            general: {
              message: data.errors.general || message || "",
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
    yield put(
      signupFail({
        error: {
          general: "Unknown Error",
        },
      })
    );
  }
}

function* watchRefreshTokenRequest({ payload }: any) {
  try {
    yield put(refreshTokenLoading(null));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(refreshToken, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, statusText, success, message, data } = response;

    if (success) {
      // success
      // put user feedback
      setCookie(ACCESS_TOKEN, data.accessToken, {
        maxAge: 1 * 60 * 60, // 1 hour
      } as any);
      setCookie(REFRESH_TOKEN, data.refreshToken, {
        maxAge: 7 * 60 * 60 * 24, // 7 days
      } as any);

      // wont show toast for token refresh success
      // toast.success(message);
      yield put(refreshTokenSuccess(null));
    } else {
      yield put(
        refreshTokenFail({
          error: {
            general: {
              message: data.errors.general || message || "",
            },
          },
        })
      );
    }
  } catch (e) {
    // put some user feedback
    // fail
    yield put(
      refreshTokenFail({
        error: {
          general: "Unknown Error",
        },
      })
    );
  }
}
