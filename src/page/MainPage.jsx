import React from "react";
import InputField from "../component/searchInput/InputField";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import {  useSelector } from "react-redux";


export default function MainPage() {
  const everyArticles = useSelector((state)=>state.articleSlice.everyArticles)

  return (
    <>
      <Header />
      <InputField />
      <ArticleList articles={everyArticles}/>
   
   </>
  );
}
