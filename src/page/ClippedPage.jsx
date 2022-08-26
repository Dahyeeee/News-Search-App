import React from "react";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import {  useSelector } from "react-redux";

export default function ClippedPage() {
  const clippedArticles = useSelector((state)=>state.articleSlice.clippedArticles)
  return (
    <>
      <Header />
      <ArticleList articles={clippedArticles}/>
    </>
  );
}
