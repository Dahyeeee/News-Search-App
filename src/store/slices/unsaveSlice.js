import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  searchWord: "",
  page: 1,
};

const unsaveSlice = createSlice({
  name: "unsave",
  initialState: initialState,
  reducers: {
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
