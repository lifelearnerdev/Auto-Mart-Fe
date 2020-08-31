import backImg from '../images/automart.jpg';

const styles = theme => ({
  paper: {
    backgroundImage: `radial-gradient(circle at 50% 50%, rgb(50, 50, 50, 0.8),
      rgb(20, 20, 20, 0.6),
      rgb(7, 7, 7, 0.7) , rgb(2, 2, 2, 0.7)), url(${backImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '0px',
    marginTop: '0px',
    minHeight: '99vh',
    boxShadow: 'none',
    position: 'relative'
  },
  signinBtn: {
    color: 'white',
    background: 'rgb(212, 7, 7)',
    fontWeight: 'bold',
    fontSize: '1rem',
    height: '2.7em',
    width: '7em',
    marginBottom: '2em',
    ['&:hover']: {
      background: '#070707'
    },
    [theme.breakpoints.down('sm')]: {
      width: '6em',
      height: '2em',
      marginBottom: '0.5em'
    }
  },
  nav: {
    margin: '0 auto',
    paddingTop: '1rem',
    background: 'transparent',
    boxShadow: 'none',
    width: '94%'
  },
  typography: {
    marginBottom: '0.8em',
    color: '#FFFFFF',
    width: '100%',
    fontSize: '3rem',
    fontWeight: 'bolder',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },
  title: {
    padding: '0px 0.5em',
    textAlign: 'center',
    alignContent: 'center',
    position: 'absolute',
    width: '98%',
    top: '50%',
    transform: 'translate(0, -50%)',
    background: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
    [theme.breakpoints.only('md')]: {
      top: '60%'
    }
  },
  helperText: {
    background: 'transparent'
  },
  textWrapper: {
    margin: '0 auto',
    padding: '0px',
    background: 'transparent',
    boxShadow: 'none',
    width: '100%'
  },
  email: {
    background: '#FFFFFF',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '41%'
    }
  },
  resize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  resizeTextField: {
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  },
  createBtn: {
    height: '3.2em',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    boxShadow: 'none',
    background: 'rgb(212, 7, 7)',
    fontSize: '1.2rem',
    color: '#FFFFFF',
    ['&:hover']: {
      background: '#070707'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      height: '3.2em'
    }
  },
  typoSmall: {
    fontSize: '1.3rem',
    color: 'white',
    marginTop: '0.8em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  },
  imgContainer: {
    width: '80%',
    height: '20em',
    overflow: 'none',
    borderRadius: '5%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      height: '17em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  typeWrap: {
    padding: '5em',
    color: 'white',
    border: 'none',
    background: '#070707',
    borderTop: '0.5em solid #202020',
    [theme.breakpoints.down('lg')]: {
      padding: '2em'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2em 0',
      borderTop: '0.3em solid #202020'
    }
  },
  typeTextWrap: {
    [theme.breakpoints.down('md')]: {
      padding: '5%'
    }
  },
  typeTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem'
    }
  },
  typeBody: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem'
    }
  }
});

export default styles;
