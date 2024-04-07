import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
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
    getPhotosRequest(state, action) {
      console.log("Get photos request received");
      // run middleware
    },
    getPhotosLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getPhotosSuccess(state, action) {
      console.log("Get photos success in slice");
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
    getPhotosFail(state, action) {
      console.log("Get photos failed action");
      //   console.log(action.payload);
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
  getPhotosRequest,
  getPhotosLoading,
  getPhotosSuccess,
  getPhotosFail,
  resetPhoto,
} = photoSlice.actions;
export default photoSlice.reducer;
