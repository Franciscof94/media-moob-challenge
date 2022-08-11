import React from "react";
import styled from "styled-components";
import BannerImage from "../assets/Banner.png";
import Screen from "../styles/Screen";

const Banner = () => {
  return (
    <Wrapper>
          <img src={BannerImage} alt="banner" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
> img {
    width: 100%;
}
`;

export default Banner;
