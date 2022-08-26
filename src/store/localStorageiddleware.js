const localStorageMiddleware = (store) => (next) => (action) => {
 
  if(action.type==='articleHandler/toggleClippedArticles'){
    const clippedArticles = store.getState().articleSlice.clippedArticles
    localStorage.setItem("clippedArticles", JSON.stringify(clippedArticles));
  }

  return next(action);
};

export default localStorageMiddleware;
