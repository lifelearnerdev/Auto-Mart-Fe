import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    // margin: '0 auto',
    // width: '100%',
    paddingTop: '1em',
    paddingBottom: '1em',
    border: 'none',
    borderTop: `solid thin ${fade(theme.palette.common.black, 0.15)}`,
    borderBottom: `solid thin ${fade(theme.palette.common.black, 0.15)}`
    // textAlign: 'center'
  },
  typography: {
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    marginTop: '0.5em'
  },
  gridLeft: {
    paddingLeft: '2em',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '1em'
    }
  }
}));
