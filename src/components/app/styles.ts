import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #E8E8E8;
  padding: 10px 16px;
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 72px;
    margin-top: 10px;
    letter-spacing: -0.5px;
    color: #3A3A3A;
  }

  @media (max-width: 767px) {
    padding: 0;
    background: white;
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #FFFFFF;
      margin-left: 22px;
      margin-top: -10px;
    }
  }
`;

export const Forms = styled.div`
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Header = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    background: #3A3A3A;
    margin: 0;
    height: 56px;
  }
`;

export const MobilePanels = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    background: #3A3A3A;
    margin: -1px 0 0 0;
    height: 48px;
    margin-bottom: 2px;
    box-shadow: 0 2px 0px rgba(0, 0, 0, .2);
  }
`;

export const Tab = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid white;
  }
`;