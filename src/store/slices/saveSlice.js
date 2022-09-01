import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  everyArticles: [],
  clippedArticles: [],
  history: [],
  isMainpage: true,
};

const saveSlice = createSlice({
  name: "save",
  initialState: initialState,
  reducers: {
    setEveryArticles: (state, action) => {
      const clippedArticles = state.clippedArticles;
      const data = action.payload.data;
      if (!clippedArticles) {
        state.everyArticles = data;
      } else {
        state.everyArticles = data.map((each) =>
          !!clippedArticles.find(
            (clip) => clip._id === each._id,
          )
            ? { ...each, clipped: true }
            : each,
        );
      }
    },
    setMoreArticles: (state, action) => {
      const clippedArticles = state.clippedArticles;
      let data = action.payload.data;
      data = data.map((each) =>
        !!clippedArticles.find(
          (clip) => clip._id === each._id,
        )
          ? { ...each, clipped: true }
          : each,
      );
      console.log("reudcer");
      state.everyArticles =
        state.everyArticles.concat(data);
    },
    setHistory: (state, action) => {
      const word = action.payload.word;
      if (state.history.includes(word)) {
        state.history = state.history.filter(
          (each) => each !== word,
        );
      }
      if (state.history.length >= 5) {
        state.history.pop();
      }
      state.history.unshift(word);
    },
    toggleClippedArticles: (state, action) => {
      const chosen = action.payload.chosen;
      const id = chosen._id;
      console.log(chosen.clipped, id);

      if (!chosen.clipped) {
        state.clippedArticles.push({
          ...chosen,
          clipped: true,
        });
        state.everyArticles = state.everyArticles.map(
          (article) =>
            article._id === id
              ? { ...article, clipped: true }
              : article,
        );
      } else {
        state.clippedArticles =
          state.clippedArticles.filter(
            (article) => article._id !== id,
          );
        state.everyArticles = state.everyArticles.map(
          (article) =>
            article._id === id
              ? { ...article, clipped: false }
              : article,
        );
      }
    },
    togglePages: (state, action) => {
      state.isMainpage = action.payload.state;
    },
  },
});

export const {
  toggleClippedArticles,
  setEveryArticles,
  setMoreArticles,
  togglePages,
  setHistory,
} = saveSlice.actions;
export default saveSlice.reducer;
