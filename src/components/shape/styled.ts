import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7DCFE4", //your color
    },
  },
});

export const Shape = styled.div`
  width: 328px;
  padding: 16px 16px 32px 16px;
  background: #ffffff;
  border-radius: 4px;
  margin-right: 28px;
  margin-bottom: 28px;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin: 0 0 16px 3px;
    color: #3a3a3a;
  }
  @media (max-width: 767px) {
    margin-right: 0;
    width: 100vw;
  }
`;

export const Line = styled.div`
  height: 1px;
  background: rgba(33, 33, 33, 0.08);
  margin: 0 -16px;
`;

export const Figure = styled.div`
  position: relative;
  display: flex;
  margin-top: 16px;
`;

export const FirstArrow = styled.img`
  position: absolute;
`;

export const SecondArrow = styled.img`
  position: absolute;
`;

export const ThirdArrow = styled.img`
  position: absolute;
  margin: 20px 0 0 1px;
`;

export const Form = styled.div<{ radius?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  border-radius: ${(props) => props.radius};
  margin: auto 0;
  width: 168px;
  height: 168px;
  @media (max-width: 767px) {
    width: 319px;
    height: 319px;
  }
  @media (max-width: 479px) {
    width: calc(100vw - 160px);
    height: calc(100vw - 160px);
  }
`;

export const FormTrapezoidalBig = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 165.5px solid black;
  border-left: 27px solid transparent;
  border-right: 27px solid transparent;
  height: 0;
  width: 172px;
  @media (max-width: 767px) {
    width: 266px;
    border-bottom: 319px solid black;
  }
  @media (max-width: 479px) {
    width: calc(100vw - 213px);
    border-bottom: calc(100vw - 160px) solid black;
  }
`;

export const FormTrapezoidalSmall = styled.div`
  position: absolute;
  display: flex;
  margin: 2.5px;
  align-items: center;
  justify-content: center;
  border-bottom: 160.5px solid white;
  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
  height: 0;
  width: 163px;
  left: -26px;
  @media (max-width: 767px) {
    width: 261px;
    border-bottom: 314px solid white;
  }
  @media (max-width: 479px) {
    width: calc(100vw - 218px);
    border-bottom: calc(100vw - 165px) solid white;
  }
`;

export const Result = styled.div`
  display: flex;
  margin: 32px 0 0 3px;
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(58, 58, 58, 0.74);
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 36px;
    color: #3a3a3a;
    margin: 12px 0 0 0;
  }
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
    color: rgba(58, 58, 58, 0.74);
    margin-top: 6px;
  }
`;

export const useStyles = makeStyles(() => ({
  oneArr: {
    width: 172,
    marginBottom: 20,
    "@media (max-width: 767px)": {
      width: "336px",
    },
    "@media (max-width: 479px)": {
      width: "calc(100.5vw - 150px)",
    },
  },
  secondArr: {
    marginLeft: "174px",
    top: "82px",
    height: '88px',
    "@media (max-width: 767px)": {
      height: "164px",
      top: "162px",
      marginLeft: "323px",
    },
    "@media (max-width: 479px)": {
      height: "calc(51.5vw - 80px)",
      top: "calc(50vw - 80px)",
      marginLeft: "calc(100vw - 147px - (100vw / 16 - 328px / 16))",
    },
  },
  thirdArr: {
    marginTop: 13,
    marginLeft: 2,
    "@media (max-width: 767px)": {
      marginTop: '3px',
      marginLeft: -3,
      width: "331px",
    },
    "@media (max-width: 479px)": {
      marginTop: 'calc(13px - (100vw / 16 - 328px / 16))',
      marginLeft: -3,
      width: "calc(100vw - 148px)",
    },
  },
  fourArr: {
    top: "-2px",
    left: "173px",
    "@media (max-width: 767px)": {
      height: "331px",
      left: "320px",
    },
    "@media (max-width: 479px)": {
      height: "calc(100.5vw - 150px )",
      left: "calc(100vw - 149px - (100vw / 14 - 328px / 14))",
    },
  },
  fiveArr: {
    marginLeft: 175,
    height: '170px',
    top: "-2px",
    "@media (max-width: 767px)": {
      marginLeft: "315px",
      height: "321px",
    },
    "@media (max-width: 479px)": {
      marginLeft: "calc(100vw - 154px - (100vw / 14 - 328px / 14))",
      height: "calc(100vw - 158px)",
    },
  },
  sixArr: {
    zIndex: 11,
    top: 70,
    width: 145,
    "@media (max-width: 767px)": {
      zIndex: 11,
      top: "144px",
      width: "306px",
    },
    "@media (max-width: 479px)": {
      zIndex: 11,
      top: "calc(48.5vw - 82px - (100vw / 14 - 328px / 14))",
      width: "calc(100vw - 179px)",
    },
  },
  inputOne: {
    width: 112,
    top: 98,
    marginLeft: 16,
    "@media (max-width: 767px)": {
      top: "216px",
    },
    "@media (max-width: 479px)": {
      top: "calc(75vw - 147px)",
    },
  },
  inputTwo: {
    width: 112,
    top: 24,
    marginLeft: 31,
    "@media (max-width: 767px)": {
      marginLeft: "106px",
    },
    "@media (max-width: 479px)": {
      marginLeft: "calc(50vw - 133px)",
    },
  },
  inputThree: {
    width: 112,
    top: 54,
    marginLeft: 16,
    "@media (max-width: 767px)": {
      top: "131.5px",
    },
    "@media (max-width: 479px)": {
      top: "calc(50vw - 108px)",
    },
  },
  inputFour: {
    width: 112,
    top: 54,
    marginLeft: 16,
    "@media (max-width: 767px)": {
      top: "131.5px",
    },
    "@media (max-width: 479px)": {
      top: "calc(50vw - 112px)",
    },
  },
  inputFive: {
    width: 112, marginTop: 170, zIndex: 11,
    "@media (max-width: 767px)": {
      marginTop: "331px",
    },
    "@media (max-width: 479px)": {
      marginTop: "calc(100vw - 148px)"
    },
  },
  input: {
    background: "white",
  }
}));
