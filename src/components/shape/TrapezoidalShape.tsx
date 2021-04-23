import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BigVerticalArrow from "../../assets/icons/BigVerticalArrow.svg";
import BigHorizontalArrow from "../../assets/icons/BigHorizontalArrow.svg";
import SmallHorizontalArrow from "../../assets/icons/SmallHorizontalArrow.svg";
import {
  Shape,
  Line,
  Figure,
  FirstArrow,
  SecondArrow,
  ThirdArrow,
  FormTrapezoidalBig,
  FormTrapezoidalSmall,
  Result,
  theme,
} from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";

interface PropsTab {
  active: number;
}

function TrapezoidalShape({ active }: PropsTab) {
  const { t } = useTranslation();

  const [calculation, setCalculation] = React.useState<{
    square: string;
    perimeter: string;
    mediana: string;
    height: string;
    width: string;
  }>({
    square: "0",
    perimeter: "0",
    mediana: "",
    height: "",
    width: "",
  });

  const [stateFocus, setStateFocus] = React.useState<{
    focusInputHeight: boolean;
    focusInputMediana: boolean;
    focusInputWidth: boolean;
  }>({
    focusInputHeight: false,
    focusInputMediana: false,
    focusInputWidth: false,
  });

  const onValueMediana = (e: any) => {
    setCalculation({
      ...calculation,
      mediana: e.target.value
        .replace(/[^.,0-9]/g, "")
        .replace(/^\./, "")
        .replace(/^,/, "")
        .replace(/[.]/, ",")
        .replace(/^([^,]*,)|,/g, "$1"),
    });
  };

  const onValueHeight = (e: any) => {
    setCalculation({
      ...calculation,
      height: e.target.value
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

  if (+(calculation.mediana.replace(/,/g, ".")) > 0 && +(calculation.height.replace(/,/g, ".")) > 0 && +(calculation.width.replace(/,/g, ".")) === 0) {
    calculation.square = (
      Math.ceil(+calculation.mediana.replace(/,/g, ".") * +calculation.height.replace(/,/g, ".") * 10) / 10
    )
      .toString()
      .replace(".", ",");
    calculation.perimeter = (
      Math.ceil(
        (2 * +calculation.mediana.replace(/,/g, ".") + (2 * +calculation.height.replace(/,/g, ".")) / 0.992546152) * 10
      ) / 10
    )
      .toString()
      .replace(".", ",");
  } else if (+(calculation.mediana.replace(/,/g, ".")) > 0 && +(calculation.height.replace(/,/g, ".")) > 0 && +(calculation.width.replace(/,/g, ".")) > 0) {
    calculation.square = (
      Math.ceil(+calculation.mediana.replace(/,/g, ".") * +calculation.height.replace(/,/g, ".") * 10) / 10
    )
      .toString()
      .replace(".", ",");
    calculation.perimeter = (
      Math.ceil(
        (+calculation.width.replace(/,/g, ".") +
          (2 * (+calculation.mediana.replace(/,/g, ".") - +calculation.width.replace(/,/g, ".") / 2) +
            2 *
              Math.sqrt(
                Math.pow(+calculation.height.replace(/,/g, "."), 2) +
                  Math.pow(+calculation.width.replace(/,/g, ".") - +calculation.mediana.replace(/,/g, "."), 2)
              ))) *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
  } else if (+(calculation.mediana.replace(/,/g, ".")) === 0 && +(calculation.height.replace(/,/g, ".")) > 0 && +(calculation.width.replace(/,/g, ".")) > 0) {
    calculation.square = (
      Math.ceil(
        +calculation.height.replace(/,/g, ".") *
          (+calculation.width.replace(/,/g, ".") -
            (+calculation.height.replace(/,/g, ".") / 0.992546152) * 0.121869343) *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
    calculation.perimeter = (
      Math.ceil(
        (+calculation.width.replace(/,/g, ".") +
          (+calculation.height.replace(/,/g, ".") / 0.992546152) * 2 +
          (+calculation.width.replace(/,/g, ".") - 2 * +calculation.height.replace(/,/g, ".") * 0.12278456)) *
          10
      ) / 10
    )
      .toString()
      .replace(".", ",");
  } else {
    calculation.square = "0";
    calculation.perimeter = "0";
  }

  function onFocusHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: true });
  }

  function onBlurHeight() {
    setStateFocus({ ...stateFocus, focusInputHeight: false });
    if (calculation.height === '0') {
      calculation.height = ''
    }
  }

  function onFocusMediana() {
    setStateFocus({ ...stateFocus, focusInputMediana: true });
  }

  function onBlurMediana() {
    setStateFocus({ ...stateFocus, focusInputMediana: false });
    if (calculation.mediana === '0') {
      calculation.mediana = ''
    }
    if (calculation.width && calculation.width !== '0') {
      calculation.mediana = Math.min(
        +calculation.mediana.replace(/,/g, "."),
        +calculation.width.replace(/,/g, ".")
      ).toString().replace(/[.]/g, ",");
      if (calculation.mediana === '0') {
        calculation.mediana = ''
      }
    }
  }

  function onFocusWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: true });
  }

  function onBlurWidth() {
    setStateFocus({ ...stateFocus, focusInputWidth: false });
    if (calculation.width === '0') {
      calculation.width = ''
    }
    if (calculation.width && calculation.width !== '0') {
      calculation.mediana = Math.min(
        +calculation.mediana.replace(/,/g, "."),
        +calculation.width.replace(/,/g, ".")
      ).toString().replace(/[.]/g, ",");
      if (calculation.mediana === '0') {
        calculation.mediana = ''
      }
    }
  }

  const onKeyDownMediana = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === '0') {
        calculation.mediana = ''
      }
      if (!calculation.height) {
        document.getElementById("trapezoidal_height")?.focus();
        return;
      }
      if (!calculation.width) {
        document.getElementById("trapezoidal_width")?.focus();
        return;
      }
      if (calculation.width && calculation.width !== '0') {
        calculation.mediana = Math.min(
          +calculation.mediana.replace(/,/g, "."),
          +calculation.width.replace(/,/g, ".")
        ).toString().replace(/[.]/g, ",");
        if (calculation.mediana === '0') {
          calculation.mediana = ''
        }
      }
    }
  };

  const onKeyDownHeight = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === '0') {
        calculation.height = ''
      }
      if (!calculation.mediana) {
        document.getElementById("trapezoidal_mediana")?.focus();
        return;
      }
      if (!calculation.width) {
        document.getElementById("trapezoidal_width")?.focus();
        return;
      }
    }
  };

  const onKeyDownWidth = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      e.target.blur();
      if (e.target.value === '0') {
        calculation.width = ''
      }
      if (!calculation.mediana) {
        document.getElementById("trapezoidal_mediana")?.focus();
        return;
      }
      if (!calculation.height) {
        document.getElementById("trapezoidal_height")?.focus();
        return;
      }
      if (calculation.width && calculation.width !== '0') {
        calculation.mediana = Math.min(
          +calculation.mediana.replace(/,/g, "."),
          +calculation.width.replace(/,/g, ".")
        ).toString().replace(/[.]/g, ",");
        if (calculation.mediana === '0') {
          calculation.mediana = ''
        }
      }
    }
  };

  return (
    <Shape
      style={
        active === 4 || active === 3
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h2>{t("trapecoidal_shape")}</h2>
      <Line />
      <Figure>
        <FormTrapezoidalBig>
          <FormTrapezoidalSmall>
            <FirstArrow
              src={SmallHorizontalArrow}
              alt="arrow"
              style={{ zIndex: 11, top: 80 }}
            />
            <ThemeProvider theme={theme}>
              <TextField
                id="trapezoidal_mediana"
                label={t("width")}
                value={calculation.mediana}
                onChange={onValueMediana}
                onKeyUp={onKeyDownMediana}
                type="text"
                variant="outlined"
                style={{ width: 112, marginTop: 160, zIndex: 11 }}
                onFocus={onFocusMediana}
                onBlur={onBlurMediana}
                inputProps={{ inputMode: "numeric" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {stateFocus.focusInputMediana || calculation.mediana
                        ? t("meters")
                        : ""}
                    </InputAdornment>
                  ),
                }}
              />
            </ThemeProvider>
          </FormTrapezoidalSmall>
        </FormTrapezoidalBig>
        <SecondArrow
          top="2px"
          src={BigVerticalArrow}
          alt="arrow"
          style={{ marginLeft: 6 }}
        />
        <ThemeProvider theme={theme}>
          <TextField
            id="trapezoidal_height"
            label={t("height")}
            value={calculation.height}
            onChange={onValueHeight}
            onKeyUp={onKeyDownHeight}
            type="text"
            variant="outlined"
            style={{ width: 112, top: 54, marginLeft: 16 }}
            onFocus={onFocusHeight}
            onBlur={onBlurHeight}
            inputProps={{ inputMode: "numeric" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {stateFocus.focusInputHeight || calculation.height
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
        style={{ marginBottom: 20, marginLeft: 5 }}
        alt="arrow"
      />
      <ThemeProvider theme={theme}>
        <TextField
          id="trapezoidal_width"
          label={t("width")}
          variant="outlined"
          type="text"
          value={calculation.width}
          onChange={onValueWidth}
          onKeyUp={onKeyDownWidth}
          style={{ width: 112, top: 24, marginLeft: 31 }}
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

export default TrapezoidalShape;
