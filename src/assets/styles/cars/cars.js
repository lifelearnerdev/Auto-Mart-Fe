import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  container: {
    // height: '70%',
    // border: 'solid 1px red',
    padding: '2em',
    [theme.breakpoints.down('md')]: {
      padding: '0.5em'
    },
    minHeight: 'calc(100vh - 13em)'
  },
  carContainer: {
    paddingTop: '5em',
    paddingBottom: '5em',
    minHeight: 'calc(100vh - 20em)',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    }
  },
  card: {
    // border: 'solid 1px blue',
    marginBottom: '1em'
    // ['&:hover']: {
    //   cursor: 'pointer'
    // }
  },
  details: {
    paddingLeft: '1em'
  },
  cardCard: {
    paddingLeft: '1em',
    paddingRight: '1em',
    borderTop: theme.palette.border.main
  },
  insideCard: {
    padding: '1em',
    width: '98%',
    marginBottom: '1em',
    borderTop: theme.palette.border.main,
    boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
    borderRadius: '4px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
    // height: '100%'
  },
  img: {
    // height: '100%',
    // minWidth: '300px',
    width: '100%'
  },
  typography: {
    display: 'block',
    textTransform: 'capitalize'
  },
  title: {
    display: 'block',
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  },
  price: {
    color: theme.palette.secondary.main
  },
  rentBtn: {
    background: theme.palette.secondary.main,
    color: 'white',
    border: `solid thin ${theme.palette.secondary.main}`,
    borderRadius: '7px',
    padding: '15px',
    ['&:hover']: {
      background: 'black'
    }
  }
}));
