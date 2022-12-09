import { createTheme } from "@mui/material/styles";

export const NavlinkTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          margin: "0 10px",
          fontStyle: "normal",

          fontWeightBold: 700,
          textTransform: "uppercase",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },

  typography: {
    fontSize: 18,
    fontFamily: "Sans-serif",
  },
});

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1650,
    },
  },
});
