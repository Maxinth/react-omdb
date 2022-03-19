import styled from "styled-components";

const Section = styled.section`
  background-color: #e5e5e5;
  width: 100%;
`;
const Box = styled.div`
  margin-top: 90px;
  /* width: 51px; */
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 28px;
  padding-right: 27px;

  /* width: 100%; */

  @media (min-width: 834px) {
    /* position: static; */
    /* width: 680px; */
    height: 54px;
    left: 0px;
    top: 35px;
    padding-right: 77px;
    padding-left: 77px;
  }

  @media (min-width: 1440px) {
    padding-right: 57px;
  }
`;

const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  align-self: flex-start;
`;
const InputBox = styled.input`
  width: 100%;
  min-height: 34px;
  border: 1px solid #000000;
  margin: 4px 0px;
  /* padding: 0.5rem; */

  @media (min-width: 834px) {
    min-height: 54px;
  }
`;
export { Box, InputBox, Label, Section };
