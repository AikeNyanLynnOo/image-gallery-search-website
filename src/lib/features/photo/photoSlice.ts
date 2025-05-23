import { createSlice, current } from "@reduxjs/toolkit";

interface PhotoState {
  totalPages: number;
  total: number;
  photos: any[];
  page: number;
  loading: {
    isPending: boolean | null;
    isComplete: boolean | null;
  };
  isSuccess: boolean | null;
  error: {
    message: string | null;
  };
}

const initialState: PhotoState = {
  totalPages: 0,
  total: 0,
  photos: [],
  page: 1,
  loading: {
    isPending: null,
    isComplete: true,
  },
  isSuccess: null,
  error: {
    message: null,
  },
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getImagesRequest(state, action) {
      // run middleware
    },
    getImagesLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getImagesSuccess(state, action) {
      const prev = current(state);
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        page: action.payload.restart ? 1 : prev.page + 1,
        photos: action.payload.restart
          ? action.payload.photos
          : [...prev.photos, ...action.payload.photos],
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        isSuccess: true,
        error: {
          message: null,
        },
      };
    },
    getImagesFail(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSuccess: false,
        error: {
          message: action.payload.message || null,
        },
      };
    },
    resetPhoto(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: null,
        },
        photos: [],
        isSuccess: null,
        error: {
          message: null,
        },
      };
    },
  },
});

export const {
  getImagesRequest,
  getImagesLoading,
  getImagesSuccess,
  getImagesFail,
  resetPhoto,
} = photoSlice.actions;
export default photoSlice.reducer;
