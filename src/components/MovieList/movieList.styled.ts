import styled from "styled-components";

const Container = styled.section`
  align-self: flex-start;
  margin-top: 33px;
  margin-bottom: 26px;
  /* background-color: #e5e5e5; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  padding-left: 28px;
  /* padding-right: 27px; */
  @media (min-width: 834px) {
    /* padding-right: 77px; */
    padding-left: 77px;
  }

  @media (min-width: 1440px) {
    /* padding-right: 57px; */
  }
`;
const Title = styled.p`
  text-align: left;
  width: 210px;
  height: 23px;
  left: 28px;
  top: 472px;
  margin-bottom: 26px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  transition: all 0.2s;
  color: #000000;

  @media (min-width: 834px) {
    font-family: "DM Sans", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 18px;
    height: 31px;
    width: 100%;
  }
`;

const InnerBox = styled.div``;
const MoviesBox = styled.section`
  overflow-x: scroll;

  //hide the scrollbar
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  //hide the scrollbar
  ${InnerBox} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
const Card = styled.div`
  min-height: 200px;
  min-width: 200px;
  max-height: 200px;
  max-width: 200px;
  border-radius: 12px;
  padding: 10px;
  background-color: #000000;
  color: #fff;
  display: flex;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  font-size: 18px;
  transition: all 0.2s;
  text-align: center;
  font-family: "DM Sans", sans-serif;
  @media (min-width: 834px) {
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
    font-size: 24px;
  }
`;
export { Container, Title, Card, MoviesBox, InnerBox };
