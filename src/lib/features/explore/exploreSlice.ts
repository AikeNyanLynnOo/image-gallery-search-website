import { createSlice, current } from "@reduxjs/toolkit";

interface ExploreState {
  filterOptions: any;
  suggestedTopics: any[];
  images: any[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
  };
  filters: {
    uploadedWithin: string;
    sortBy: string;
    topic: string;
  };
  loading: {
    isPending: boolean | null;
    isComplete: boolean | null;
  };
  isSuccess: boolean | null;
  error: {
    message: string | null;
  };
}

const initialState: ExploreState = {
  filterOptions: {},
  suggestedTopics: [],
  images: [],
  pagination: {
    total: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 10,
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: null,
    prevPage: null,
  },
  filters: {
    uploadedWithin: "all",
    sortBy: "likes",
    topic: "all",
  },
  loading: {
    isPending: null,
    isComplete: true,
  },
  isSuccess: null,
  error: {
    message: null,
  },
};

export const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    getExploreDataRequest(state, action) {
      // run middleware
    },
    getExploreDataLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getExploreDataSuccess(state, action) {
      const prev = current(state);
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        filterOptions: action.payload.filterOptions,
        suggestedTopics: action.payload.suggestedTopics,
        images: action.payload.restart ? action.payload.images : [...prev.images, ...action.payload.images],
        pagination: {
          total: action.payload.pagination.total,
          totalPages: action.payload.pagination.totalPages,
          currentPage: action.payload.restart ? 1 : prev.pagination.currentPage + 1,
          limit: action.payload.pagination.limit,
          hasNextPage: action.payload.pagination.hasNextPage,
          hasPrevPage: action.payload.pagination.hasPrevPage,
          nextPage: action.payload.pagination.nextPage,
          prevPage: action.payload.pagination.prevPage,
        },
        isSuccess: true,
        error: {
          message: null,
        },
      };
    },
    getExploreDataFail(state, action) {
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
    updateFilters(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    },
    resetExplore(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: null,
        },
        filterOptions: {},
        suggestedTopics: [],
        images: [],
        pagination: {
          total: 0,
          totalPages: 0,
          currentPage: 1,
          limit: 10,
          hasNextPage: false,
          hasPrevPage: false,
          nextPage: null,
          prevPage: null,
        },
        filters: {
          uploadedWithin: "",
          sortBy: "",
          topic: "",
        },
        isSuccess: null,
        error: {
          message: null,
        },
      };
    },
    setPage(state, action) {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    },
    setLimit(state, action) {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          limit: action.payload,
        },
      };
    },
    setUploadedWithin(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          uploadedWithin: action.payload,
        },
      };
    },
    setSortBy(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };
    },
    setTopic(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          topic: action.payload,
        },
      };
    },
    increasePage(state) {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.pagination.currentPage + 1,
        },
      };
    },
  },
});

export const {
  getExploreDataRequest,
  getExploreDataLoading,
  getExploreDataSuccess,
  getExploreDataFail,
  updateFilters,
  resetExplore,
  setPage,
  setLimit,
  setUploadedWithin,
  setSortBy,
  setTopic,
  increasePage,
} = exploreSlice.actions;

export default exploreSlice.reducer; 