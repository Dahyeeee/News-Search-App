import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleClippedArticles,toggleEveryArticles, markClipped } from "../../store/reducer";

/* CSS */
const ArticleItemSt = styled.div`
  margin: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  &:nth-child(3n) {
    border: none;
  }
`;

const ArticleHeaderSt = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  h2 {
    overflow: hidden;
    font-weight: bold;
    font-size: 23px;
  }
  button {
    color: #525252;
    display: flex;
    font-size: 25px;
    &.active {
      color: #ffd056;
    }
  }
`;

const ArticleBodySt = styled.div`
  p {
    overflow: hidden;
    margin-top: 0.3rem;
    font-size: 15px;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: #8e8e8e;
    margin-top: 0.3rem;
  }
`;

export default function ArticleItem({ article }) {
  const dispatch = useDispatch()
  
  let { web_url:url, _id: id, headline:{main:title}, pub_date:date, snippet:content, clipped} = article;
  
  //everyarticle일때만 
//  const clippedArticles = useSelector((state)=>state.articleSlice.clippedArticles);
 // const alreadyClipped = clippedArticles.find(each=>each._id ===id);

 // if(alreadyClipped){
 //   dispatch(markClipped({id:id}))
//  }

  return (
    <ArticleItemSt>
      <ArticleHeaderSt>
        <a href={url} target='_blanck' rel='noopener noreferrer'><h2>{title}</h2></a>
        <button className={clipped? 'active':''}onClick={()=>{
          dispatch(toggleEveryArticles({id:id}))
          dispatch(toggleClippedArticles({chosen:article}))}}>
          <FaStar />
        </button>
      </ArticleHeaderSt>
      <ArticleBodySt>
        <p>{content}</p>
        <span>{date.slice(0,10)}</span>
      </ArticleBodySt>
    </ArticleItemSt>
  );
}
