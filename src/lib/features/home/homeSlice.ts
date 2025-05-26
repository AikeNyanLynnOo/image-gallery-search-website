import { createSlice, current } from "@reduxjs/toolkit";

interface HomeState {
  topics: any[];
  heroImages: any[];
  featuredImages: any[];
  popularCollections: any[];
  loading: {
    isPending: boolean | null;
    isComplete: boolean | null;
  };
  isSuccess: boolean | null;
  error: {
    message: string | null;
  };
}

const initialState: HomeState = {
  topics: [],
  heroImages: [],
  featuredImages: [],
  popularCollections: [],
  loading: {
    isPending: null,
    isComplete: true,
  },
  isSuccess: null,
  error: {
    message: null,
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getHomeDataRequest(state, action) {
      // run middleware
    },
    getHomeDataLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getHomeDataSuccess(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        topics: action.payload.topics,
        heroImages: action.payload.heroImages,
        featuredImages: action.payload.featuredImages,
        popularCollections: action.payload.popularCollections,
        isSuccess: true,
        error: {
          message: null,
        },
      };
    },
    getHomeDataFail(state, action) {
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
    resetHome(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: null,
        },
        topics: [],
        heroImages: [],
        featuredImages: [],
        popularCollections: [],
        isSuccess: null,
        error: {
          message: null,
        },
      };
    },
  },
});

export const {
  getHomeDataRequest,
  getHomeDataLoading,
  getHomeDataSuccess,
  getHomeDataFail,
  resetHome,
} = homeSlice.actions;
export default homeSlice.reducer; 