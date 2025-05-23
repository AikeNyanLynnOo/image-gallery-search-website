import { createSlice, current } from "@reduxjs/toolkit";

export interface ErrorField {
  message: string | null;
}

interface AuthState {
  loading: {
    isPending: boolean | null;
    isComplete: boolean | null;
  };
  isLoginSuccess: boolean;
  isSignupSuccess: boolean;
  error: {
    general: ErrorField;
    firstName: ErrorField;
    lastName: ErrorField;
    email: ErrorField;
    password: ErrorField;
  };
}

const initialState: AuthState = {
  loading: {
    isPending: null,
    isComplete: true,
  },
  isLoginSuccess: false,
  isSignupSuccess: false,
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
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isLoginSuccess: true,
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
        isLoginSuccess: false,
        error: {
          ...state.error,
          ...action.payload.error,
        },
      };
    },
    signupRequest(state, action) {
      // run middleware
    },
    signupLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    signupSuccess(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSignupSuccess: true,
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
    signupFail(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSignupSuccess: false,
        error: {
          ...state.error,
          ...action.payload.error,
        },
      };
    },
    updateError(state, action) {
      return {
        ...state,
        error: {
          ...state.error,
          ...action.payload.error,
        },
      };
    },
    resetAuthState(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: true,
        },
        isLoginSuccess: false,
        isSignupSuccess: false,
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
  },
});

export const {
  loginRequest,
  loginLoading,
  loginSuccess,
  loginFail,
  signupRequest,
  signupLoading,
  signupSuccess,
  signupFail,
  updateError,
  resetAuthState,
} = authSlice.actions;
export default authSlice.reducer;
