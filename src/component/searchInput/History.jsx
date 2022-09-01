import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const HistorySt = styled.div`
  border: 1px black solid;
  border-radius: 1.2rem;
  width: 20rem;
  padding: 0 1.2rem;
  background-color: white;

  ul {
    list-style: none;
  }

  .history_firstLine {
    color: gray;
  }
`;
export default function History() {
  const history = useSelector(
    (state) => state.save.history,
  );

  const haveHistory = history.length !== 0;

  return (
    <>
      {haveHistory && (
        <HistorySt>
          <div>
            <ul>
              <li className="history_firstLine">
                You have searched...
              </li>
              {history.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>
        </HistorySt>
      )}
    </>
  );
}
