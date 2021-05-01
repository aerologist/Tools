import styled from "styled-components";

export const MobilePanels = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    background: #3A3A3A;
    margin: -1px 0 0 0;
    height: 48px;
    margin-bottom: 2px;
  }
`;

export const Tab = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;