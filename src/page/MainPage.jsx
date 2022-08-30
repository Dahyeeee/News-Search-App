import React from "react";
import InputField from "../component/searchInput/InputField";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { togglePages } from "../store/slices/saveSlice";

export default function MainPage() {
  const isMainPage = useSelector(
    (state) => state.save.isMainpage,
  );
  const dispatch = useDispatch();

  const path = window.location.pathname;
  console.log(path);
  if (path === "/clip") {
    dispatch(togglePages({ state: false }));
  } else {
    dispatch(togglePages({ state: true }));
  }

  return (
    <>
      <Header />
      {isMainPage ? <InputField /> : ""}
      <ArticleList />
    </>
  );
}
