import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./localStorageiddleware.js";
import articleSlice from "./reducer.js";

const initalState = {
  everyArticles: [],
  clippedArticles: [],
  history: [],
  isMainPage: true,
  isLoading: false,
  searchWord: "",
};

 const reHydrateStore = () => {
   if (localStorage.getItem("clippedArticles") !== undefined) {
     const clippedArticles = JSON.parse(localStorage.getItem("clippedArticles"));
     return {articleSlice:{...initalState, clippedArticles}}
   }return {articleSlice:{...initalState}}
 };

export const store = configureStore({
  reducer: {
    articleSlice: articleSlice,
  },
   preloadedState: reHydrateStore(),
middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(localStorageMiddleware),
});
