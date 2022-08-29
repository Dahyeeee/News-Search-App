import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import saveReducer from "./slices/saveSlice.js";
import unsaveReducer from "./slices/unsaveSlice.js";

const rootReuder = combineReducers({
  save: saveReducer,
  unsave: unsaveReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["save"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReuder,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});
