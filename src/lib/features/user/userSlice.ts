import { createSlice } from "@reduxjs/toolkit";

export interface ErrorField {
  message: string | null;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  displayName: string;
  bio: string;
  avatar: string;
  location: string;
  website: string;
}

interface UserState {
  loading: {
    isPending: boolean | null;
    isComplete: boolean | null;
  };
  profile: UserProfile | null;
  _id: string | null;
  email: string | null;
  isVerified: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  error: {
    general: ErrorField;
  };
}

const initialState: UserState = {
  loading: {
    isPending: null,
    isComplete: true,
  },
  profile: null,
  _id: null,
  email: null,
  isVerified: false,
  createdAt: null,
  updatedAt: null,
  error: {
    general: {
      message: null,
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfileRequest(state, action) {
      // run middleware
    },
    getUserProfileLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getUserProfileSuccess(state, action) {
      const { profile, _id, email, isVerified, createdAt, updatedAt } =
        action.payload;
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        profile,
        _id,
        email,
        isVerified,
        createdAt,
        updatedAt,
        error: {
          general: {
            message: null,
          },
        },
      };
    },
    getUserProfileFail(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        profile: null,
        _id: null,
        email: null,
        isVerified: false,
        createdAt: null,
        updatedAt: null,
        error: {
          ...state.error,
          ...action.payload.error,
        },
      };
    },
    resetUserState(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: true,
        },
        profile: null,
        _id: null,
        email: null,
        isVerified: false,
        createdAt: null,
        updatedAt: null,
        error: {
          general: {
            message: null,
          },
        },
      };
    },
  },
});

export const {
  getUserProfileRequest,
  getUserProfileLoading,
  getUserProfileSuccess,
  getUserProfileFail,
  resetUserState,
} = userSlice.actions;

export default userSlice.reducer;
