import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  featuredCollections: [],
  collections: [],
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
  filterOptions: {
    date: [
      { name: 'Any time', value: 'all' },
      { name: 'Today', value: 'today' },
      { name: 'Last 3 days', value: '3d' },
      { name: 'This Week', value: 'week' },
      { name: 'This Month', value: 'month' },
    ],
    sortBy: [
      { name: 'Likes', value: 'likes' },
      { name: 'Views', value: 'views' },
      { name: 'Downloads', value: 'downloads' },
    ],
  },
  filters: {
    keyword: "",
    imageCount: "any",
    dateCreated: "all",
    sortBy: "likes",
  },
  loading: {
    isPending: false,
    isComplete: true,
  },
  isSuccess: false,
  error: {
    message: null,
  },
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    getCollectionsDataRequest(state, action) {
      // run middleware
    },
    getCollectionsDataLoading(state, action) {
      state.loading.isPending = true;
      state.loading.isComplete = false;
    },
    getCollectionsDataSuccess(state, action) {
      const prev = current(state);
      state.loading.isPending = false;
      state.loading.isComplete = true;
      state.filterOptions = action.payload.filterOptions;
      state.featuredCollections = action.payload.featuredCollections;
      state.collections = action.payload.restart ? action.payload.collections : [...prev.collections, ...action.payload.collections];
      state.pagination = {
        total: action.payload.pagination.total,
        totalPages: action.payload.pagination.totalPages,
        currentPage: action.payload.restart ? 1 : prev.pagination.currentPage + 1,
        limit: action.payload.pagination.limit,
        hasNextPage: action.payload.pagination.hasNextPage,
        hasPrevPage: action.payload.pagination.hasPrevPage,
        nextPage: action.payload.pagination.nextPage,
        prevPage: action.payload.pagination.prevPage,
      };
      state.isSuccess = true;
      state.error.message = null;
    },
    getCollectionsDataFail(state, action) {
      state.loading.isPending = false;
      state.loading.isComplete = true;
      state.isSuccess = false;
      state.error.message = action.payload?.message || null;
    },
    updateFilters(state, action) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetCollection(state, action) {
      state.loading.isPending = false;
      state.loading.isComplete = false;
      state.filterOptions = initialState.filterOptions;
      state.featuredCollections = [];
      state.collections = [];
      state.pagination = {
        total: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10,
        hasNextPage: false,
        hasPrevPage: false,
        nextPage: null,
        prevPage: null,
      };
      state.filters = {
        keyword: "",
        imageCount: "any",
        dateCreated: "all",
        sortBy: "likes",
      };
      state.isSuccess = false;
      state.error.message = null;
    },
    setPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
    setLimit(state, action) {
      state.pagination.limit = action.payload;
    },
    setDateCreated(state, action) {
      state.filters.dateCreated = action.payload;
    },
    setSortBy(state, action) {
      state.filters.sortBy = action.payload;
    },
    setKeyword(state, action) {
      state.filters.keyword = action.payload;
    },
    setImageCount(state, action) {
      state.filters.imageCount = action.payload;
    },
    increasePage(state) {
      state.pagination.currentPage += 1;
    },
  },
});

export const {
  getCollectionsDataRequest,
  getCollectionsDataLoading,
  getCollectionsDataSuccess,
  getCollectionsDataFail,
  updateFilters,
  resetCollection,
  setPage,
  setLimit,
  setDateCreated,
  setSortBy,
  setKeyword,
  setImageCount,
  increasePage,
} = collectionSlice.actions;

export default collectionSlice.reducer; 