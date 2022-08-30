import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { togglePages } from "../../store/slices/saveSlice";
import { Link } from "react-router-dom";

const BookmarkSt = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 7%;
  cursor: pointer;
  .active {
    color: red;
  }
`;

export default function Bookmark() {
  const isMainPage = useSelector(
    (state) => state.save.isMainpage,
  );
  const dispatch = useDispatch();
  return (
    <BookmarkSt>
      <Link to={isMainPage ? "/clip" : "/"}>
        <BsFillBookmarkFill
          onClick={() => {
            dispatch(togglePages());
          }}
          className={isMainPage ? "" : "active"}
        />
      </Link>
    </BookmarkSt>
  );
}
