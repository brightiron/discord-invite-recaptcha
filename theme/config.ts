import { createTheme } from "@mui/material/styles";
import NHaasGroteskRegular from "../fonts/NHaasGroteskDSPro-65Md.woff2";

export const theme = createTheme({
  typography: {
    fontFamily: "NHassGrotesk, Helvetica, Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#F8CC82",
      main: "#F8CC82",
      contrastText: "#292C32",
    },
    secondary: {
      light: "#EAD8B8",
      main: "#EAD8B8",
      contrastText: "#000",
    },
    background: {
      default: "rgba(43, 49, 61, 1)",
      paper: "#1D2026",
    },
    action: {
      hover: "#EAD8B8",
      hoverOpacity: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "NHassGrotesk";
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('NHassGrotesk'), local('NHassGrotesk-55Rg'), url(${NHaasGroteskRegular}) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `,
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#EAD8B8",
          },
        },
      },
    },
  },
});
