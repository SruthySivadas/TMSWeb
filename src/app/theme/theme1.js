import { createTheme } from '@mui/material/styles';

const color1 = '#0d73bb';
const color2 = '#1976d2';
const color2_light = '#2196f3';
const color3 = '#C5E2FC';
const fontColor = '#020202';

const h1 = '3rem';
const h2 = '2rem';
const h3 = '1rem';
const h4 = '.8rem';
const h5 = '.5rem';

const h1_L = '3rem';
const h2_L = '2rem';
const h3_L = '1rem';
const h4_L = '.9rem';
const h5_L = '.5rem';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: color1
    },
    secondary: {
      main: color2
    },
    third: {
      main: color3
    },
    background: {
      default: '#f5f8fa'
    },
    customColor: {
      color1: color1,
      color2: {
        dark: color2,
        light: color2_light
      },
      color3: color3,
      fontColor: fontColor
    }
  },

  typography: {
    // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontFamily: 'Montserrat, sans-serif,Roboto',
    h1: {
      fontSize: h1,
      '@media (min-width:600px)': {
        fontSize: h1_L
      }
    },
    h2: {
      fontSize: h2,
      '@media (min-width:600px)': {
        fontSize: h2_L
      }
    },
    h3: {
      fontSize: h3,
      '@media (min-width:600px)': {
        fontSize: h3_L
      },
      color: color1
    },
    h4: {
      fontSize: h4,
      '@media (min-width:600px)': {
        fontSize: h4_L
      },
      color: color1,
      fontWeight: 500
    },
    h5: {
      fontSize: h5,
      '@media (min-width:600px)': {
        fontSize: h5_L
      },
      color: color1,
      fontWeight: 500
    },

    button: {
      fontSize: h3
    },
    label: {
      fontSize: h4
    },
    input: {
      fontSize: h1
    },
    body1: {
      fontSize: h4,
      '@media (min-width:600px)': {
        fontSize: h4_L
      },
      color: fontColor
    },
    body2: {
      fontSize: h4,
      '@media (min-width:600px)': {
        fontSize: h4_L
      }
    },
    caption: {
      fontSize: h3,
      '@media (min-width:600px)': {
        fontSize: h3_L
      }
    }
  }
});

export default theme;
