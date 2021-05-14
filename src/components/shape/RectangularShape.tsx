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
} from "./styled";
import { ThemeProvider } from "@material-ui/core/styles";

function RectangularShape() {
  const { t } = useTranslation();

  const [calculation, setCalculation] = React.useState<{
    square: string;
    perimeter: string;
    bigHeight: string;
    width: string;
  }>({
    square: "0",
    perimeter: "0",
    bigHeight: "",
    width: "",
  });

  const [stateFocus, setStateFocus] = React.useState<{
    focusInputHeight: boolean;
    focusInputWidth: boolean;
  }>({
    focusInputHeight: false,
    focusInputWidth: false,
  });

  const onValueBigHeight = (e: any) => {
    setCalculation({
      ...calculation,
      bigHeight: e.target.value
        .replace(/[^.,0-9]/g, "")
        .replace(/^\./, "")
        .replace(/^,/, "")
        .replace(/[.]/, ",")
        .replace(/^([^,]*,)|,/g, "$1"),
    });
  };

  const onValueWidth = (e: any) => {
    setCalculation({
      ...calculation,
      width: e.target.value
        .replace(/[^.,0-9]/g, "")
        .replace(/^\./, "")
        .replace(/^,/, "")
        .replace(/[.]/, ",")
        .replace(/^([^,]*,)|,/g, "$1"),
    });
  };

  if (
    !calculation.bigHeight ||
    !calculation.width ||
    calculation.bigHeight === "0" ||
    calculation.width === "0"
  ) {
    calculation.square = "0";
    calculation.perimeter = "0";
  } else {
    calculation.square = (
      Math.ceil(
        +calculation.bigHeight.replace(/,/g, ".") *
          +calculation.width.replace(/,/g, ".") *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
    calculation.perimeter = (
      Math.ceil(
        (+calculation.bigHeight.replace(/,/g, ".") * 2 +
          +calculation.width.replace(/,/g, ".") * 2) *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
  }

  function onFocusWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: true });
  }

  function onBlurWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: false });
    if (calculation.width === "0") {
      calculation.width = "";
    }
  }

  function onFocusHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: true });
  }

  function onBlurHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: false });
    if (calculation.bigHeight === "0") {
      calculation.bigHeight = "";
    }
  }

  const onKeyDownWidth = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === "0") {
        calculation.width = "";
      }
      if (!calculation.bigHeight) {
        document.getElementById("rectangular_height")?.focus();
      }
    }
  };

  const onKeyDownHeight = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === "0") {
        calculation.bigHeight = "";
      }
      if (!calculation.width) {
        document.getElementById("rectangular_width")?.focus();
      }
    }
  };

  return (
    <Shape>
      <h2>{t("rectangular_shape")}</h2>
      <Line />
      <Figure>
        <Form
          radius="0"
          style={
            window.innerWidth < 767
              ? { height: "51vw", width: "51vw" }
              : { height: "168px", width: "168px" }
          }
        >
          <ThirdArrow
            src={BigHorizontalArrow}
            style={
              window.innerWidth < 767
                ? { marginBottom: 20, width: "51.5vw" }
                : { marginBottom: 20 }
            }
            alt="arrow"
          />
          <ThemeProvider theme={theme}>
            <TextField
              id="rectangular_width"
              label={t("width")}
              variant="outlined"
              type="text"
              value={calculation.width}
              onChange={onValueWidth}
              style={{ width: 112, marginLeft: 1 }}
              onKeyUp={onKeyDownWidth}
              onFocus={onFocusWidth}
              onBlur={onBlurWidth}
              inputProps={{ inputMode: "numeric" }}
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
        <SecondArrow
          src={BigVerticalArrow}
          alt="arrow"
          style={
            window.innerWidth < 767
              ? { top: "2px", height: "51.5vw", left: "calc(16px + 51vw)" }
              : { top: "2px", left: "180px" }
          }
        />
        <ThemeProvider theme={theme}>
          <TextField
            id="rectangular_height"
            label={t("height")}
            value={calculation.bigHeight}
            onChange={onValueBigHeight}
            onKeyUp={onKeyDownHeight}
            type="text"
            variant="outlined"
            style={
              window.innerWidth < 767
                ? { width: 112, top: "calc(25.5vw - 28px)", marginLeft: 16 }
                : { width: 112, top: 54, marginLeft: 16 }
            }
            onFocus={onFocusHeight}
            onBlur={onBlurHeight}
            inputProps={{ inputMode: "numeric" }}
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
