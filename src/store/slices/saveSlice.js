import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clippedArticles: [],
  history: [],
  isMainpage: true,
};

const saveSlice = createSlice({
  name: "save",
  initialState: initialState,
  reducers: {
    setHistory: (state, action) => {
      const word = action.payload.word;
      if (state.history.includes(word)) {
        const index = state.history.indexOf(word);
        state.history.splice(index, 1);
      }
      if (state.history.length > 5) {
        state.history.shift();
      }
      state.history.push(word);
    },
    setClippedArticles: (state, action) => {
      state.clippedArticles.push(action.payload.article);
    },
    deleteClippedArticle: (state, action) => {
      state.clippedArticles = state.clippedArticles.filter(
        (article) => article._id !== action.payload.id,
      );
    },
    togglePages: (state) => {
      state.isMainpage = !state.isMainpage;
    },
  },
});

export const {
  setClippedArticles,
  deleteClippedArticle,
  togglePages,
  setHistory,
} = saveSlice.actions;
export default saveSlice.reducer;
