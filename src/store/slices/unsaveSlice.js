import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  everyArticles: [],
  isLoading: false,
  searchWord: "",
  page: 1,
};

const unsaveSlice = createSlice({
  name: "unsave",
  initialState: initialState,
  reducers: {
    setEveryArticles: (state, action) => {
      state.everyArticles = action.payload.data;
    },
    setMoreArticles: (state, action) => {
      state.everyArticles.concat(action.payload.data);
    },
    toggleEveryArticles: (state, action) => {
      state.everyArticles = state.everyArticles.map(
        (each) =>
          each._id === action.payload.id
            ? { ...each, clipped: !each.clipped }
            : each,
      );
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload.word;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload.boolean;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const {
  setEveryArticles,
  setMoreArticles,
  setSearchWord,
  toggleIsLoading,
  setPage,
  toggleEveryArticles,
} = unsaveSlice.actions;
export default unsaveSlice.reducer;
