import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setHistory,
  setEveryArticles,
} from "../../store/slices/saveSlice.js";
import { request } from "../../utils/api";
import { toggleIsLoading } from "../../store/slices/unsaveSlice.js";

const InputContainerST = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .searchBar__input {
    align-items: center;
    width: 20rem;
    height: 1.3rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid black;
    border-radius: 2rem;
    position: relative;
  }
  input:focus {
    border: 2px solid rgb(140, 140, 140);
    outline: none;
    font-size: 18px;
  }
`;

let timer;
export default function InputField() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const getArticles = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") return;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      dispatch(toggleIsLoading({ state: true }));
      const data = await request(value, 1);
      dispatch(setEveryArticles({ data: data }));
      dispatch(setHistory({ word: value }));
      dispatch(toggleIsLoading({ state: false }));
    }, 500);
  };

  return (
    <>
      <InputContainerST>
        <div className="searchBar">
          <input
            className="searchBar__input"
            placeholder="type keyword here!"
            value={value}
            type="text"
            onChange={(e) => getArticles(e)}
          />
          <div className="searchBar__icon"></div>
        </div>
        {/* <div> <History /></div> */}
      </InputContainerST>
    </>
  );
}
