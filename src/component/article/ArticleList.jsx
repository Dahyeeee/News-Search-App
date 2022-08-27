import styled from "styled-components";
import ArticleItem from "./ArticleItem";

/* CSS */
const ArticleWrapper = styled.main`
  article {
    display: grid;
    margin-top: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    line-height: 1.2;
  }
`;

export default function ArticleList({articles}) {

  return (
   
    <ArticleWrapper>
      <article>{articles.map((article) => (
    <ArticleItem
      key={article._id}
      article={article}
    />
  ))}</article>
    </ArticleWrapper>
  )
}
