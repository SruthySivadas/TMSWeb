import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0d73bb",
    },
    secondary: {
      main: "#C0C0C0",
    },
    third: {
      main: "#C5E2FC",
    },
    background: {
      default: "#FFFFFF",
    },
    sandel: {
      main: "#f6f978",
    },
    success: {
      main: "#019F4B",
    },
    textPrimary: {
      main: "#313335",
    },
    textSecondary: {
      main: "#FF5C5C",
    },
    textPromotion: {
      main: "#0d73bb",
    },
  },
  typography: {
    // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontFamily: 'Lato',
    fontSize: 12,
    display4: {
      fontSize: 12,
    },
    display3: {
      fontSize: 12,
    },
    display2: {
      fontSize: 12,
    },
    display1: {
      fontSize: 12,
    },
    headline: {
      fontSize: 12,
    },
    title: {
      fontSize: 12,
    },
    subheading: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 12,
    },
    h5: {
      fontSize: '1rem',
    },
    p: {
      fontSize: '1rem',
    },
    caption: {
      fontSize: "0.75rem",
    },
    button: {
      fontSize: "0.75rem",
    },
    label: {
      fontSize: "0.625rem",
    },
  }
});

export default theme;
