import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import Screen from "../styles/Screen";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  > div {
    > img {
      height: 45px;
      width: 100%;
      ${Screen.sm`
        height: 75px;
    `}
    }
  }
`;

export default Header;
