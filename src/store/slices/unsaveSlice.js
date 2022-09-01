import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  searchWord: "",
  page: 1,
  lastItem: "",
};

const unsaveSlice = createSlice({
  name: "unsave",
  initialState: initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload.word;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload.state;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setLastItme: (state, action) => {
      state.lastItem = action.payload.lastItem;
    },
  },
});

export const {
  setSearchWord,
  toggleIsLoading,
  setPage,
  setLastItme,
} = unsaveSlice.actions;
export default unsaveSlice.reducer;
