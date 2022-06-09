import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
