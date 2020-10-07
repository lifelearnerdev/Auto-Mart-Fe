import {
  createMuiTheme,
  responsiveFontSizes,
  fade
} from '@material-ui/core/styles';

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#070707'
    },
    secondary: {
      main: 'rgb(212, 7, 7)'
    },
    error: {
      main: '#FF4141'
    },
    border: {
      main: `solid ${fade('#000000', 0.15)} thin`
    }
  },
  typography: {
    fontFamily: [
      'medium',
      'Arial',
      'sans-serif'
    ].join(','),
    useNextVariants: true
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

export default responsiveFontSizes(AppTheme);
