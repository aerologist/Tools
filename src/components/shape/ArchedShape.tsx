import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SmallVerticalArrow from '../../assets/icons/SmallVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, ThirdArrow, Form, Result, theme} from './styles';
import { ThemeProvider } from '@material-ui/core/styles';

interface PropsTab {
    active: number
}

function ArchedShape({active}: PropsTab) {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: string,
        perimeter: string,
        heightSmall: number,
        heightBig: number,
        width: number
    }>({
        square: "0",
        perimeter: "0",
        heightSmall: 0,
        heightBig: 0,
        width: 0
    })

    const [stateFocus, setStateFocus] = React.useState<{
        focusInputBigHeight: boolean,
        focusInputSmallHeight: boolean,
        focusInputWidth: boolean,
    }>({
        focusInputBigHeight: false,
        focusInputSmallHeight: false,
        focusInputWidth: false
    })

    calculation.heightSmall = Math.min(calculation.heightSmall, calculation.heightBig);

    const onValueSmallHeight = (e: any) => {
        setCalculation({...calculation, heightSmall: e.target.value});
    }

    const onValueBigHeight = (e: any) => {
        setCalculation({...calculation, heightBig: e.target.value});
    }

    const onValueWidth = (e: any) => {
        setCalculation({...calculation, width: e.target.value});
    }

    if (!calculation.heightSmall || !calculation.width) {
        calculation.perimeter = "0";
    } else {
        calculation.perimeter = (Math.ceil(((+calculation.heightSmall) + (+calculation.heightSmall) + (+calculation.width) + (+calculation.width / 2 * 3.1415926535)) * 10) / 10).toString().replace('.', ',');
    }

    if (!calculation.heightSmall || !calculation.width || !calculation.heightBig) {
        calculation.square = "0";
    } else {
        if (Math.abs(calculation.heightBig - calculation.heightSmall) < 0.0000001) {
            calculation.square = (Math.ceil((calculation.width * calculation.heightSmall) * 10) / 10).toString().replace('.', ',');
        } else {
            if ((calculation.heightBig - calculation.heightSmall) < (calculation.width / 2)) {
                const l = Math.sqrt((calculation.heightBig - calculation.heightSmall) * (calculation.heightBig - calculation.heightSmall) + (calculation.width / 2) * (calculation.width / 2));
    
                const r = l * l / (2 * (calculation.heightBig - calculation.heightSmall));
    
                const phi = Math.asin((calculation.width / 2) / r);
    
                const s1 = calculation.width * calculation.heightSmall;
    
                const s2 = Math.PI * r * r * (phi / Math.PI);
    
                const s3 = 0.5 * r * r * Math.sin(2 * phi);
    
                calculation.square = (Math.ceil((s1 + s2 - s3) * 10) / 10).toString().replace('.', ',');
            }
            if ((calculation.heightBig - calculation.heightSmall) > (calculation.width / 2)) {
                const l = Math.sqrt((calculation.heightBig - calculation.heightSmall) * (calculation.heightBig - calculation.heightSmall) + (calculation.width / 2) * (calculation.width / 2));
    
                const r = l * l / (2 * (calculation.heightBig - calculation.heightSmall));
    
                const phi = Math.asin((calculation.width / 2) / r);
    
                const s1 = calculation.width * calculation.heightSmall;
    
                const s2 = Math.PI * r * r * (1 - phi / Math.PI);
    
                const s3 = 0.5 * r * r * Math.sin(2 * phi);
    
                calculation.square = (Math.ceil((s1 + s2 + s3) * 10) / 10).toString().replace('.', ',');
            }
        }
    }

    function onFocusWidth() {
        setStateFocus({...stateFocus, focusInputWidth: true})
    }

    function onBlurWidth() {
        setStateFocus({...stateFocus, focusInputWidth: false})
    }

    function onFocusSmallHeight() {
        setStateFocus({...stateFocus, focusInputSmallHeight: true})
    }

    function onBlurSmallHeight() {
        setStateFocus({...stateFocus, focusInputSmallHeight: false})
    }

    function onFocusBigHeight() {
        setStateFocus({...stateFocus, focusInputBigHeight: true})
    }

    function onBlurBigHeight() {
        setStateFocus({...stateFocus, focusInputBigHeight: false})
    }

    return (
      <Shape style={ active === 0 || active === 1 ? {  display: "block" } : {  display: "none" }}>
        <h2>{t('arched_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="84px 84px 0 0">
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <ThemeProvider theme={theme}>
                    <TextField
                        label={t('height')}
                        value={calculation.heightBig === 0 ? '' : calculation.heightBig}
                        onChange={onValueBigHeight}
                        type='number'
                        variant="outlined"
                        style={{ width: 112, marginTop: -5, color: 'black' }}
                        onFocus={onFocusBigHeight}
                        onBlur={onBlurBigHeight}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{stateFocus.focusInputBigHeight || calculation.heightBig ? t('meters') : ''}</InputAdornment>,
                        }}
                    />
                </ThemeProvider>
            </Form>
            <SecondArrow top="85px" src={SmallVerticalArrow} alt="arrow"/>
            <ThemeProvider theme={theme}>
                <TextField
                    label={t('height')}
                    variant="outlined"
                    value={calculation.heightSmall === 0 ? '' : calculation.heightSmall}
                    type='number'
                    onChange={onValueSmallHeight}
                    style={{ width: 112, top: 98, marginLeft: 16 }}
                    onFocus={onFocusSmallHeight}
                    onBlur={onBlurSmallHeight}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{stateFocus.focusInputSmallHeight || calculation.heightSmall ? t('meters') : ''}</InputAdornment>,
                    }}
                />
            </ThemeProvider>
        </Figure>
        <ThirdArrow src={BigHorizontalArrow} alt="arrow" style={{ marginLeft: 2 }}/>
        <ThemeProvider theme={theme}>
            <TextField
                label={t('width')}
                variant="outlined"
                value={calculation.width === 0 ? '' : calculation.width}
                type='number'
                onChange={onValueWidth}
                style={{ width: 112, top: 24, marginLeft: 28}}
                onFocus={onFocusWidth}
                onBlur={onBlurWidth}
                className='input'
                InputProps={{
                    endAdornment: <InputAdornment position="end">{stateFocus.focusInputWidth || calculation.width ? t('meters') : ''}</InputAdornment>,
                }}
            />
        </ThemeProvider>
        <Result>
            <div>
                <h3>{t('area')}</h3>
                <p>{calculation.square}</p>
                <h4>{t('square_meters')}</h4>
            </div>
            <div style={{ marginLeft: 67 }}>
                <h3>{t('perimeter')}</h3>
                <p>{calculation.perimeter}</p>
                <h4>{t('meters')}</h4>
            </div>
        </Result>
      </Shape>
    );
}
  
export default ArchedShape;