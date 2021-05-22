import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BigVerticalArrow from "../../assets/icons/BigVerticalArrow.svg";
import { Shape, Line, Figure, FirstArrow, Form, Result, theme } from "./styled";
import { ThemeProvider } from "@material-ui/core/styles";
import {useStyles} from './styled';

function RoundShape() {
  const classes = useStyles();

  const { t } = useTranslation();

  const [calculation, setCalculation] = React.useState<{
    square: string;
    perimeter: string;
    diameter: string;
  }>({
    square: "0",
    perimeter: "0",
    diameter: "",
  });

  const [stateFocus, setStateFocus] = React.useState<{
    focusInputDiameter: Boolean;
  }>({
    focusInputDiameter: false,
  });

  const onValueDiameter = (e: any) => {
    setCalculation({
      ...calculation,
      diameter: e.target.value
        .replace(/[^.,0-9]/g, "")
        .replace(/^\./, "")
        .replace(/^,/, "")
        .replace(/[.]/, ",")
        .replace(/^([^,]*,)|,/g, "$1"),
    });
  };

  calculation.square = (
    Math.ceil(
      (+calculation.diameter.replace(/,/g, ".") / 2) *
        (+calculation.diameter.replace(/,/g, ".") / 2) *
        3.1415926535 *
        10
    ) / 10
  )
    .toString()
    .replace(".", ",");

  calculation.perimeter = (
    Math.ceil(
      ((2 * 3.1415926535 * +calculation.diameter.replace(/,/g, ".")) / 2) * 10
    ) / 10
  )
    .toString()
    .replace(".", ",");

  function onFocusDiameter() {
    setStateFocus({ ...stateFocus, focusInputDiameter: true });
  }

  function onBlurDiameter() {
    setStateFocus({ ...stateFocus, focusInputDiameter: false });
    if (calculation.diameter === "0") {
      calculation.diameter = "";
    }
  }

  const onKeyDownDiameter = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === "0") {
        calculation.diameter = "";
      }
    }
  };

  return (
    <Shape>
      <h2>{t("round_shape")}</h2>
      <Line />
      <Figure>
        <Form
          radius="calc(50vw - 80px)"
        >
          <FirstArrow
            src={BigVerticalArrow}
            alt="arrow"
            style={{ height: "calc(100% + 4px)" }}
          />
          <ThemeProvider theme={theme}>
            <TextField
              onKeyUp={onKeyDownDiameter}
              label={t("diameter")}
              value={calculation.diameter}
              onChange={onValueDiameter}
              type="text"
              variant="outlined"
              style={{ width: 112, marginBottom: 6}}
              onFocus={onFocusDiameter}
              onBlur={onBlurDiameter}
              inputProps={{ inputMode: "numeric" }}
              InputLabelProps={{className: classes.inputLabelTwo}}
              InputProps={{
                className: classes.input,
                endAdornment: (
                  <InputAdornment position="end">
                    {stateFocus.focusInputDiameter || calculation.diameter
                      ? t("meters")
                      : ""}
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
        </Form>
      </Figure>
      <Result>
        <div>
          <h3>{t("area")}</h3>
          <p>{calculation.square}</p>
          <h4>{t("square_meters")}</h4>
        </div>
        <div style={{ marginLeft: 67 }}>
          <h3>{t("perimeter")}</h3>
          <p>{calculation.perimeter}</p>
          <h4>{t("meters")}</h4>
        </div>
      </Result>
    </Shape>
  );
}

export default RoundShape;
