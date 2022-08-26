import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { togglePages } from "../../store/reducer";
import {Link} from "react-router-dom"

const BookmarkSt = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 7%;
  color: ${props => props.isMain ? "black" : "red"};
  cursor: pointer;
`;

export default function Bookmark() {
  const isMainPage = useSelector((state)=>state.articleSlice.isMainPage)
  const dispatch = useDispatch()
  return (
    <BookmarkSt isMain={isMainPage}>
      <Link to={isMainPage ? '/clip' : '/'}>
        <BsFillBookmarkFill onClick={()=>dispatch(togglePages())}/>
      </Link>
    </BookmarkSt>
  );
}
