import img from '../../images/signup.jpg';

const styles = theme => ({
  photoGrid: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    background: `url(${img}) no-repeat center`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
  logo: {
    width: '45%',
    textAlign: 'center',
    marginBottom: '1em'
  },
  formGrid: {
    align: '0 auto'
  },
  formContainer: {
    width: '75%',
    margin: '0 auto',
    marginTop: '10%',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '100%'
    }
  },
  createTypog: {
    color: '#070707',
    [theme.breakpoints.only('md')]: {
      fontSize: '1.6rem'
    }
  },
  fillTypog: {
    color: 'gray'
  },
  textFields: {
    marginTop: '2em',
    marginBottom: '2em'
  },
  textField: {
    marginBottom: '0.5em'
  },
  loginLink: {
    fontFamily: 'medium, Arial',
    color: 'rgb(212, 7, 7)',
    fontSize: '0.8rem',
    float: 'right',
    marginTop: '0.1rem'
  },
  forgotPass: {
    fontFamily: 'medium, Arial',
    fontSize: '0.8rem',
    float: 'right',
    color: 'gray'
  },
  createBtn: {
    background: 'rgb(212, 7, 7)',
    color: 'white',
    width: '70%',
    fontSize: '1.2rem',
    marginBottom: '0.5em',
    ['&:hover']: {
      background: '#070707'
    },
    [theme.breakpoints.down('lg')]: {
      width: '98%'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.9rem'
    }
  },
  haveAccount: {
    color: 'rgb(212, 7, 7)'
  },
  btnWrapper: {
    margin: '0 auto',
    padding: '0px',
    textAlign: 'center',
    marginTop: '3em'
  },
  small: {
    fontFamily: 'medium, Arial',
    marginTop: '0.5em',
    fontSize: '0.7rem',
    color: '#FF4141'
  }
});

export default styles;
