import { createSlice, current } from "@reduxjs/toolkit";

interface HomeState {
  topics: any[];
  heroImages: any[];
  featuredImages: any[];
  popularCollections: any[];
  searchResults: any[];
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
  searchResults: [],
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
    searchHomePageRequest(state, action) {
      // run middleware
    },
    searchHomePageLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    searchHomePageSuccess(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        searchResults: action.payload,
        isSuccess: true,
        error: {
          message: null,
        },
      };
    },
    searchHomePageFail(state, action) {
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
        searchResults: [],
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
  searchHomePageRequest,
  searchHomePageLoading,
  searchHomePageSuccess,
  searchHomePageFail,
  resetHome,
} = homeSlice.actions;
export default homeSlice.reducer;
