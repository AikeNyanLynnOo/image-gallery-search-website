import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: {
    isPending: null,
    isComplete: true,
  },
  isSuccess: null,
  error: {
    general: {
      message: null,
    },
    firstName: {
      message: null,
    },
    lastName: {
      message: null,
    },
    email: {
      message: null,
    },
    password: {
      message: null,
    },
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action) {
      // run middleware
    },
    loginLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    loginSuccess(state, action) {
      const prev = current(state);
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSuccess: true,
        error: {
          general: {
            message: null,
          },
          firstName: {
            message: null,
          },
          lastName: {
            message: null,
          },
          email: {
            message: null,
          },
          password: {
            message: null,
          },
        },
      };
    },
    loginFail(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSuccess: false,
        error: action.payload.error || null,
      };
    },
  },
});

export const { loginRequest, loginLoading, loginSuccess, loginFail } =
  authSlice.actions;
export default authSlice.reducer;
