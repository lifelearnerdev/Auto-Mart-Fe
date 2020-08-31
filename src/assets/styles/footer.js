import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  footerDiv: {
    // position: 'static',
    bottom: 0,
    top: 'auto',
    width: '100%'
  },
  footer: {
    padding: '5% 20%',
    background: '#070707',
    border: 'none',
    margin: '0px',
    borderTop: '0.5em solid #202020',
    [theme.breakpoints.down('sm')]: {
      padding: '5% 25%',
      borderTop: '0.5em solid #202020'
    }
  },
  links: {
    fontFamily: 'medium, Arial',
    color: '#606060',
    display: 'block',
    fontSize: '0.9rem',
    marginTop: '1.2em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      marginTop: '1em'
    }
  },
  fooL: {
    paddingRight: '5%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0%'
    }
  },
  fooR: {
    paddingLeft: '20%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5%'
    }
  },
  fooHead: {
    fontFamily: 'medium, Arial',
    color: '#606060',
    display: 'block',
    fontSize: '1.3rem',
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  }
}));
