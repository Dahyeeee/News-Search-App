import { useSelector } from "react-redux";
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

const LoadingSt = styled.h2`
  text-align: center;
`;

function Loading() {
  return <h2>Getting data...</h2>;
}

export default function ArticleList() {
  const { isMainpage, clippedArticles, everyArticles } =
    useSelector((state) => state.save);

  const isLoading = useSelector(
    (state) => state.unsave.isLoading,
  );

  const articles = isMainpage
    ? everyArticles
    : clippedArticles;

  return (
    <ArticleWrapper>
      <article>
        {isLoading ? (
          <LoadingSt>
            <Loading />
          </LoadingSt>
        ) : (
          articles.map((article) => (
            <ArticleItem
              key={article._id}
              article={article}
            />
          ))
        )}
      </article>
    </ArticleWrapper>
  );
}
