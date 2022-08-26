import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClippedPage from "./page/ClippedPage";
import MainPage from "./page/MainPage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/clip" element={<ClippedPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
