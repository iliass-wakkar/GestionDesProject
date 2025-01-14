import { createTheme } from "@mui/material/styles";

const getCSSVariable = (variableName) => getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
export function loadTheme(){
  // Function to extract CSS variables
  return createTheme({
    palette: {
      primary: {
        main: getCSSVariable("--primaryColor"),
        dark: getCSSVariable("--primaryDarkColor"),
        light: getCSSVariable("--primaryLightColor"),
        // contrastText: getCSSVariable("--whiteColor"),
      },
      background: {
        default: getCSSVariable("--backgroundLightColor"),
        paper: getCSSVariable("--whiteColor"),
      },
      text: {
        primary: getCSSVariable("--darkGrayColor"),
        secondary: getCSSVariable("--blackColor"),
      },
      error: {
        main: getCSSVariable("--accentRedColor"),
      },
      warning: {
        main: getCSSVariable("--warningColor"),
      },
    },
    typography: {
      fontSize: parseInt(getCSSVariable("--fontSizeBase").replace("rem", "")) * 16, // Convert rem to px
      h1: {
        fontSize: getCSSVariable("--fontSizeH1"),
      },
      h2: {
        fontSize: getCSSVariable("--fontSizeH2"),
      },
      h3: {
        fontSize: getCSSVariable("--fontSizeH3"),
      },
      body1: {
        fontSize: getCSSVariable("--fontSizeBase"),
      },
      body2: {
        fontSize: getCSSVariable("--fontSizeSmall"),
      },
    },
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: getCSSVariable("--primaryColor"),
            "&.Mui-checked": {
              color: getCSSVariable("--primaryColor"),
            },
          },
        },
      },
    },
    spacing: parseInt(getCSSVariable("--spacingMedium")), // Base spacing
    shape: {
      borderRadius: parseInt(getCSSVariable("--borderRadiusMedium")),
    },
    shadows: ["none", getCSSVariable("--boxShadowLight"), getCSSVariable("--boxShadowMedium")],
    transitions: {
      duration: {
        standard: parseInt(getCSSVariable("--transitionDuration").replace("s", "")) * 1000, // Convert s to ms
      },
      easing: {
        easeInOut: getCSSVariable("--transitionEase"),
      },
    },
  });
}

