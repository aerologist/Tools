import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import { Shape, Line, Figure, FirstArrow, Form, Result, theme} from './styles';
import { ThemeProvider } from '@material-ui/core/styles';

interface PropsTab {
    active: number
}

function RoundShape({active}: PropsTab) {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: string,
        perimeter: string,
        diameter: number
    }>({
        square: "0",
        perimeter: "0",
        diameter: 0
    })

    const [stateFocus, setStateFocus] = React.useState<{
        focusInputDiameter: Boolean
    }>({
        focusInputDiameter: false
    })

    const onValueDiameter = (e: any) => {
        setCalculation({...calculation, diameter: Math.abs(e.target.value.replace(/,/g, ''))});
    }

    calculation.square = (Math.ceil(((calculation.diameter / 2 ) * (calculation.diameter / 2 ) * 3.1415926535) * 10) / 10).toString().replace('.', ',');

    calculation.perimeter = (Math.ceil((2 * 3.1415926535 * calculation.diameter / 2) * 10) / 10).toString().replace('.', ',');

    function onFocusDiameter() {
        setStateFocus({...stateFocus, focusInputDiameter: true})
    }

    function onBlurDiameter() {
        setStateFocus({...stateFocus, focusInputDiameter: false})
    }

    return (
      <Shape style={ active === 0 || active === 3 ? {  display: "block" } : {  display: "none" }}>
        <h2>{t('round_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="84px">
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <ThemeProvider theme={theme}>
                    <TextField
                        label={t('diameter')}
                        value={calculation.diameter === 0 ? '' : calculation.diameter}
                        onChange={onValueDiameter}
                        type='number'
                        variant="outlined"
                        style={{ width: 112, marginBottom: 6 }}
                        onFocus={onFocusDiameter}
                        onBlur={onBlurDiameter}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{stateFocus.focusInputDiameter || calculation.diameter ? t('meters') : ''}</InputAdornment>,
                        }}
                    />
                </ThemeProvider>
            </Form>
        </Figure>
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
  
export default RoundShape;