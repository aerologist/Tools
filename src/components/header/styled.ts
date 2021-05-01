import styled from "styled-components";

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