import styled from "styled-components";

const BannerText = styled.h1``;
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  /* width: 320px; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 257px;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-image: url("../../../Rectangle-5.svg");
  /* background-position: 50% 50%; */
  ${BannerText} {
    color: #ffffff;
    text-align: center;
    font-family: "DM Sans", sans-serif;
    font-size: 28px;
    line-height: 36.46px;
    font-weight: bold;

    @media (min-width: 321px) {
      font-size: 72px;
      line-height: 93.74px;
    }

    @media (min-width: 1440px) {
      text-align: left;
      width: 490px;
      height: 282px;
    }
  }

  @media (min-width: 321px) {
    background-image: url("../../../Rectangle-5-2.png");
    padding: 109px 172px 159px;
    object-fit: contain;
    height: 550px;
  }

  @media (min-width: 835px) {
    object-fit: contain;
    /* background-position: 50% 50%; */
    background-image: url("../../../Rectangle-5.png");
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
    padding: 109px 873px 159px 77px;
  }
`;
export { BannerText, Container };
