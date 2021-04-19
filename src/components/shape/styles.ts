import styled from "styled-components";
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
        main: '#7DCFE4' //your color
        }
    }
});

export const Shape = styled.div`
    width: 328px;
    padding: 16px 16px 32px 16px;
    background: #FFFFFF;
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
        color: #3A3A3A;
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

export const SecondArrow = styled.img<{ top?: string }>`
    position: absolute;
    top: ${props => props.top};
    left: 180px;
`;

export const ThirdArrow = styled.img`
    position: absolute;
    margin: 20px 0 0 1px;
`;

export const Form = styled.div<{ radius?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 168px;
    width: 168px;
    border: 3px solid black;
    border-radius: ${props => props.radius};
    margin: auto 0;
`;

export const FormTrapezoidalBig = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 165.5px solid black;
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
    height: 0;
    width: 172px;
`;

export const FormTrapezoidalSmall = styled.div`
    display: flex;
    margin: 2.5px;
    align-items: center;
    justify-content: center;
    border-bottom: 160.5px solid white;
    border-left: 26px solid transparent;
    border-right: 26px solid transparent;
    height: 0;
    width: 167.5px;
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
        color: #3A3A3A;
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