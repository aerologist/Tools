import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SmallVerticalArrow from "../../assets/icons/SmallVerticalArrow.svg";
import BigHorizontalArrow from "../../assets/icons/BigHorizontalArrow.svg";
import BigVerticalArrow from "../../assets/icons/BigVerticalArrow.svg";
import {
  Shape,
  Line,
  Figure,
  FirstArrow,
  SecondArrow,
  ThirdArrow,
  Form,
  Result,
  theme,
} from "./styled";
import { ThemeProvider } from "@material-ui/core/styles";

function ArchedShape() {
  const { t } = useTranslation();

  const [calculation, setCalculation] = React.useState<{
    square: string;
    perimeter: string;
    heightSmall: string;
    heightBig: string;
    width: string;
  }>({
    square: "0",
    perimeter: "0",
    heightSmall: "",
    heightBig: "",
    width: "",
  });

  const [stateFocus, setStateFocus] = React.useState<{
    focusInputBigHeight: boolean;
    focusInputSmallHeight: boolean;
    focusInputWidth: boolean;
    autoFocusBigHeight: boolean;
    autoFocusSmallHeight: boolean;
    autoFocusWidth: boolean;
  }>({
    focusInputBigHeight: false,
    focusInputSmallHeight: false,
    focusInputWidth: false,
    autoFocusBigHeight: false,
    autoFocusSmallHeight: false,
    autoFocusWidth: false,
  });

  const onValueSmallHeight = (e: any) => {
    setCalculation({
      ...calculation,
      heightSmall: e.target.value
        .replace(/[^.,0-9]/g, "")
        .replace(/^\./, "")
        .replace(/^,/, "")
        .replace(/[.]/, ",")
        .replace(/^([^,]*,)|,/g, "$1"),
    });
  };

  const onValueBigHeight = (e: any) => {
    setCalculation({
      ...calculation,
      heightBig: e.target.value
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
    !calculation.heightSmall ||
    !calculation.width ||
    calculation.heightSmall === "0" ||
    calculation.width === "0"
  ) {
    calculation.perimeter = "0";
  } else {
    calculation.perimeter = (
      Math.ceil(
        (+calculation.heightSmall.replace(/,/g, ".") +
          +calculation.heightSmall.replace(/,/g, ".") +
          +calculation.width.replace(/,/g, ".") +
          (+calculation.width.replace(/,/g, ".") / 2) * 3.1415926535) *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
  }

  if (
    !calculation.heightSmall ||
    !calculation.width ||
    !calculation.heightBig ||
    calculation.heightSmall === "0" ||
    calculation.width === "0" ||
    calculation.heightBig === "0"
  ) {
    calculation.square = "0";
  } else {
    if (
      Math.abs(
        +calculation.heightBig.replace(/,/g, ".") -
          +calculation.heightSmall.replace(/,/g, ".")
      ) < 0.0000001
    ) {
      calculation.square = (
        Math.ceil(
          +calculation.width.replace(/,/g, ".") *
            +calculation.heightSmall.replace(/,/g, ".") *
            10
        ) / 10
      )
        .toString()
        .replace(".", ",");
    } else {
      if (
        +calculation.heightBig - +calculation.heightSmall <
        +calculation.width / 2
      ) {
        const l = Math.sqrt(
          (+calculation.heightBig.replace(/,/g, ".") -
            +calculation.heightSmall.replace(/,/g, ".")) *
            (+calculation.heightBig.replace(/,/g, ".") -
              +calculation.heightSmall.replace(/,/g, ".")) +
            (+calculation.width.replace(/,/g, ".") / 2) *
              (+calculation.width.replace(/,/g, ".") / 2)
        );

        const r =
          (l * l) /
          (2 *
            (+calculation.heightBig.replace(/,/g, ".") -
              +calculation.heightSmall.replace(/,/g, ".")));

        const phi = Math.asin(+calculation.width.replace(/,/g, ".") / 2 / r);

        const s1 =
          +calculation.width.replace(/,/g, ".") *
          +calculation.heightSmall.replace(/,/g, ".");

        const s2 = Math.PI * r * r * (phi / Math.PI);

        const s3 = 0.5 * r * r * Math.sin(2 * phi);

        calculation.square = (Math.ceil((s1 + s2 - s3) * 10) / 10)
          .toString()
          .replace(".", ",");
      }
      if (
        +calculation.heightBig.replace(/,/g, ".") -
          +calculation.heightSmall.replace(/,/g, ".") >
        +calculation.width.replace(/,/g, ".") / 2
      ) {
        const l = Math.sqrt(
          (+calculation.heightBig.replace(/,/g, ".") -
            +calculation.heightSmall.replace(/,/g, ".")) *
            (+calculation.heightBig.replace(/,/g, ".") -
              +calculation.heightSmall.replace(/,/g, ".")) +
            (+calculation.width.replace(/,/g, ".") / 2) *
              (+calculation.width.replace(/,/g, ".") / 2)
        );

        const r =
          (l * l) /
          (2 *
            (+calculation.heightBig.replace(/,/g, ".") -
              +calculation.heightSmall.replace(/,/g, ".")));

        const phi = Math.asin(+calculation.width.replace(/,/g, ".") / 2 / r);

        const s1 =
          +calculation.width.replace(/,/g, ".") *
          +calculation.heightSmall.replace(/,/g, ".");

        const s2 = Math.PI * r * r * (1 - phi / Math.PI);

        const s3 = 0.5 * r * r * Math.sin(2 * phi);

        calculation.square = (Math.ceil((s1 + s2 + s3) * 10) / 10)
          .toString()
          .replace(".", ",");
      }
    }
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

  function onFocusSmallHeight() {
    setStateFocus({ ...stateFocus, focusInputSmallHeight: true });
  }

  function onBlurSmallHeight() {
    setStateFocus({ ...stateFocus, focusInputSmallHeight: false });
    if (
      calculation.heightSmall > calculation.heightBig &&
      calculation.heightBig
    ) {
      calculation.heightBig = calculation.heightSmall;
    }
    if (calculation.heightSmall === "0") {
      calculation.heightSmall = "";
    }
  }

  function onFocusBigHeight() {
    setStateFocus({ ...stateFocus, focusInputBigHeight: true });
  }

  function onBlurBigHeight() {
    setStateFocus({ ...stateFocus, focusInputBigHeight: false });
    if (
      calculation.heightSmall > calculation.heightBig &&
      calculation.heightBig
    ) {
      calculation.heightBig = calculation.heightSmall;
    }
    if (calculation.heightBig === "0") {
      calculation.heightBig = "";
    }
  }

  const sortRef = React.useRef(null);

  const onKeyDownBigHeight = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (calculation.heightSmall > calculation.heightBig) {
        calculation.heightBig = calculation.heightSmall;
      }
      if (e.target.value === "0") {
        calculation.heightBig = "";
      }
      if (!calculation.heightSmall) {
        document.getElementById("arched_height_small")?.focus();
        return;
      }
      if (!calculation.width) {
        document.getElementById("arched_width")?.focus();
        return;
      }
    }
  };

  const onKeyDownSmallHeight = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === "0") {
        calculation.heightSmall = "";
      }
      if (
        calculation.heightSmall > calculation.heightBig &&
        calculation.heightBig
      ) {
        calculation.heightBig = calculation.heightSmall;
      }
      if (!calculation.heightBig) {
        document.getElementById("arched_height_big")?.focus();
        return;
      }
      if (!calculation.width) {
        document.getElementById("arched_width")?.focus();
        return;
      }
    }
  };

  const onKeyDownWidth = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === "0") {
        calculation.width = "";
      }
      if (!calculation.heightBig) {
        document.getElementById("arched_height_big")?.focus();
        return;
      }
      if (!calculation.heightSmall) {
        document.getElementById("arched_height_small")?.focus();
        return;
      }
    }
  };

  return (
    <Shape>
      <h2>{t("arched_shape")}</h2>
      <Line />
      <Figure>
        <Form
          radius="25.5vw 25.5vw 0 0"
          style={
            document.documentElement.clientWidth < 767
              ? { height: "51vw", width: "51vw" }
              : { height: "168px", width: "168px" }
          }
        >
          <FirstArrow
            src={BigVerticalArrow}
            alt="arrow"
            style={{ height: "calc(100% - 4px)" }}
          />
          <ThemeProvider theme={theme}>
            <TextField
              id="arched_height_big"
              label={t("height")}
              onKeyUp={onKeyDownBigHeight}
              value={calculation.heightBig}
              onChange={onValueBigHeight}
              type="text"
              variant="outlined"
              style={{ width: 112, marginTop: -5, color: "black" }}
              onFocus={onFocusBigHeight}
              onBlur={onBlurBigHeight}
              inputProps={{ inputMode: "numeric" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {stateFocus.focusInputBigHeight || calculation.heightBig
                      ? t("meters")
                      : ""}
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
        </Form>
        <SecondArrow
          src={SmallVerticalArrow}
          alt="arrow"
          style={
            document.documentElement.clientWidth < 767
              ? {
                  height: "26vw",
                  top: "calc(25.5vw)",
                  left: "calc(16px + 51vw)",
                }
              : { top: "85px", left: "180px" }
          }
        />
        <ThemeProvider theme={theme}>
          <TextField
            id="arched_height_small"
            ref={sortRef}
            label={t("height")}
            variant="outlined"
            value={calculation.heightSmall}
            type="text"
            onChange={onValueSmallHeight}
            onKeyUp={onKeyDownSmallHeight}
            style={
              document.documentElement.clientWidth < 767
                ? { width: 112, top: "calc(38.5vw - 28px)", marginLeft: 16 }
                : { width: 112, top: 98, marginLeft: 16 }
            }
            onFocus={onFocusSmallHeight}
            onBlur={onBlurSmallHeight}
            inputProps={{ inputMode: "numeric" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {stateFocus.focusInputSmallHeight || calculation.heightSmall
                    ? t("meters")
                    : ""}
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
      </Figure>
      <ThirdArrow
        src={BigHorizontalArrow}
        alt="arrow"
        style={
          document.documentElement.clientWidth < 767
            ? { marginLeft: 3, width: "51vw" }
            : { marginLeft: 2 }
        }
      />
      <ThemeProvider theme={theme}>
        <TextField
          id="arched_width"
          label={t("width")}
          variant="outlined"
          value={calculation.width}
          type="text"
          onChange={onValueWidth}
          style={
            document.documentElement.clientWidth < 767
              ? { width: 112, top: 24, marginLeft: "calc(25.5vw - 53px)" }
              : { width: 112, top: 24, marginLeft: 28 }
          }
          onFocus={onFocusWidth}
          onKeyUp={onKeyDownWidth}
          onBlur={onBlurWidth}
          inputProps={{ inputMode: "numeric" }}
          className="input"
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

export default ArchedShape;
