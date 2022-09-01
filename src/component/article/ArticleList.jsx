import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPage } from "../../store/slices/unsaveSlice";
import { setMoreArticles } from "../../store/slices/saveSlice";
import ArticleItem from "./ArticleItem";
import { request } from "../../utils/api";

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

const LoadingSt = styled.div`
  text-align: center;
`;

export default function ArticleList() {
  const { isLoading, page, searchWord } = useSelector(
    (state) => state.unsave,
  );
  const { isMainpage, clippedArticles, everyArticles } =
    useSelector((state) => state.save);

  const dispatch = useDispatch();

  const observer = useRef();
  const lastArticleElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            dispatch(setPage({ page: page + 1 }));
            const data = await request(searchWord, page);
            dispatch(setMoreArticles({ data: data }));
          }
        },
      );
      if (node) observer.current.observe(node);
    },
    [isLoading],
  );

  const articles = isMainpage
    ? everyArticles
    : clippedArticles;

  return (
    <ArticleWrapper>
      <article>
        {isLoading && (
          <LoadingSt>
            {" "}
            <div>Getting data...</div>{" "}
          </LoadingSt>
        )}
        {articles.map((article, index) => (
          <div
            key={article._id}
            ref={
              index === articles.length - 1
                ? lastArticleElementRef
                : undefined
            }
          >
            <ArticleItem article={article} />
          </div>
        ))}
      </article>
    </ArticleWrapper>
  );
}
