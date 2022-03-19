import styled from "styled-components";

const LogoBox = styled.div``;
const Span = styled.div``;

const NavBox = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 106px 17.42px 107px;
  background-color: #292929;
  transition: all 0.2s;
  ${LogoBox} {
    padding: 7.83px 9.68px 7.31px 10.63px;
    :border-radius: 0px;
    color: #ffffff;
    width: 108px;
    height: 33.58px;
    border: 1px solid #fff;
    ${Span} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 87.68px;
      height: 18.43px;
      padding: 7.83px 9.68px 7.31px 10.63px;
    }
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
    padding: 40px 1170px 40px 77px;
  }
`;

export { NavBox, LogoBox, Span };
