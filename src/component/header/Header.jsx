import styled from "styled-components";
import logo from "../../static/logo.png";
import Bookmark from "./BookmarkBtn";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #fff;
`;
const Logo = styled.div`
  width: 70%;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Bookmark />
    </HeaderWrapper>
  );
}
