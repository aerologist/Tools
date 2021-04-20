import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BigVerticalArrow from "../../assets/icons/BigVerticalArrow.svg";
import BigHorizontalArrow from "../../assets/icons/BigHorizontalArrow.svg";
import {
  Shape,
  Line,
  Figure,
  SecondArrow,
  ThirdArrow,
  Result,
  Form,
  theme,
} from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";

interface PropsTab {
  active: number;
}

function RectangularShape({ active }: PropsTab) {
  const { t } = useTranslation();

  const [calculation, setCalculation] = React.useState<{
    square: string;
    perimeter: string;
    bigHeight: number;
    width: number;
  }>({
    square: "0",
    perimeter: "0",
    bigHeight: 0,
    width: 0,
  });

  const [stateFocus, setStateFocus] = React.useState<{
    focusInputHeight: boolean;
    focusInputWidth: boolean;
  }>({
    focusInputHeight: false,
    focusInputWidth: false,
  });

  const onValueBigHeight = (e: any) => {
    setCalculation({ ...calculation, bigHeight: Math.abs(e.target.value) });
  };

  const onValueWidth = (e: any) => {
    setCalculation({ ...calculation, width: Math.abs(e.target.value) });
  };

  if (!calculation.bigHeight || !calculation.width) {
    calculation.square = "0";
    calculation.perimeter = "0";
  } else {
    calculation.square = (
      Math.ceil(calculation.bigHeight * calculation.width * 10) / 10
    )
      .toString()
      .replace(".", ",");
    calculation.perimeter = (
      Math.ceil((calculation.bigHeight * 2 + calculation.width * 2) * 10) / 10
    )
      .toString()
      .replace(".", ",");
  }

  function onFocusWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: true });
  }

  function onBlurWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: false });
  }

  function onFocusHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: true });
  }

  function onBlurHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: false });
  }

  const onKeyDownWidth = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (!calculation.bigHeight) {
        document.getElementById("rectangular_height")?.focus();
      }
    }
  };

  const onKeyDownHeight = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (!calculation.width) {
        document.getElementById("rectangular_width")?.focus();
      }
    }
  };

  return (
    <Shape
      style={
        active === 4 || active === 1
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h2>{t("rectangular_shape")}</h2>
      <Line />
      <Figure>
        <Form radius="0">
          <ThirdArrow
            src={BigHorizontalArrow}
            style={{ marginBottom: 20 }}
            alt="arrow"
          />
          <ThemeProvider theme={theme}>
            <TextField
              id="rectangular_width"
              label={t("width")}
              variant="outlined"
              type="number"
              value={calculation.width === 0 ? "" : calculation.width}
              onChange={onValueWidth}
              style={{ width: 112, marginLeft: 1 }}
              onKeyUp={onKeyDownWidth}
              onFocus={onFocusWidth}
              onBlur={onBlurWidth}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {stateFocus.focusInputWidth || calculation.width
                      ? t("meters")
                      : ""}
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
        </Form>
        <SecondArrow top="2px" src={BigVerticalArrow} alt="arrow" />
        <ThemeProvider theme={theme}>
          <TextField
            id="rectangular_height"
            label={t("height")}
            value={calculation.bigHeight === 0 ? "" : calculation.bigHeight}
            onChange={onValueBigHeight}
            onKeyUp={onKeyDownHeight}
            type="number"
            variant="outlined"
            style={{ width: 112, top: 54, marginLeft: 16 }}
            onFocus={onFocusHeight}
            onBlur={onBlurHeight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {stateFocus.focusInputHeight || calculation.bigHeight
                    ? t("meters")
                    : ""}
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
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

export default RectangularShape;
