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
    toggleClippedArticles: (state, action) => {
      const chosen = action.payload.chosen;
      const id = chosen._id;
      if (!chosen.clipped) {
        state.clippedArticles.push({
          ...chosen,
          clipped: true,
        });
      } else {
        state.clippedArticles =
          state.clippedArticles.filter(
            (each) => each._id !== id,
          );
      }
    },
    togglePages: (state) => {
      state.isMainpage = !state.isMainpage;
    },
  },
});

export const {
  toggleClippedArticles,
  togglePages,
  setHistory,
} = saveSlice.actions;
export default saveSlice.reducer;
