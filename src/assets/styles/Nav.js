import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    "position": 'relative',
    "borderRadius": theme.shape.borderRadius,
    "backgroundColor": fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    "marginRight": theme.spacing(2),
    "width": '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  menuItems: {
    padding: '0px',
    margin: '0px'
  },
  menuPaper: {
    width: '100%',
    position: 'unset',
    minHeight: '60vh',
    maxHeight: '60vh',
    backgroundColor: 'rgb(30, 30, 30)'
  },
  dropDown: {
    'color': 'white',
    'marginLeft': '0.5em',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '0.2em'
    },
    '&:hover': {
      color: fade(theme.palette.common.white, 0.30)
    }
  },
  menuVehicle: {
    marginTop: '3em',
    background: fade(theme.palette.common.white, 0.15),
    borderRadius: '0px'
  },
  deskMenu: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      display: 'none',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  },
  menuList: {
    backgroundColor: 'rgb(48, 48, 48)',
    color: theme.palette.common.white
  },
  menuListList: {
    backgroundColor: 'rgb(30, 30, 30)',
    color: theme.palette.common.white
  },
  menuItem: {
    'backgroundColor': 'rgb(48, 48, 48)',
    'color': theme.palette.common.white,
    '&:focus': {
      backgroundColor: '#070707'
    }
  },
  menuItemList: {
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    backgroundColor: 'rgb(30, 30, 30)',
    color: theme.palette.common.white,
    padding: '5px',
    paddingLeft: '25%',
    borderBottom: `solid ${fade(theme.palette.common.white, 0.15)} thin`
  },
  menuItemListList: {
    backgroundColor: 'rgb(30, 30, 30)',
    color: theme.palette.common.white,
    fontSize: '1.5rem'
  },
  menuSubList: {
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
    // paddingLeft: '50%'
  }
}));

export default useStyles;
