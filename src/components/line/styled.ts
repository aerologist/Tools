import styled from "styled-components";

export const LineTabs = styled.div`
  display: none;
  margin-top: -3px;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    background: #3A3A3A;
  }
`

export const LineTab = styled.div`
  height: 3px;
  width: 100%;
  background: #3A3A3A;
  &.active {
    background: white;
  }
`