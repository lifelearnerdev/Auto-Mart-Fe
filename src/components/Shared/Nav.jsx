import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, InputBase, Badge, Button,
  MenuItem, Menu, Fade, Collapse, List, ListItem, ListItemText,
  ListItemIcon, Slide
} from '@material-ui/core';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import CarIcon from '@material-ui/icons/AirportShuttle';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandLess from '@material-ui/icons/ExpandLess';
import StoreIcon from '@material-ui/icons/Store';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from '../../assets/styles/Nav';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../../assets/images/automart_logo.png';
import '../../assets/styles/home.scss';

const AppNav = ({ changeTitle }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [vehicleEl, setVehicleEl] = useState(null);
  const [priceEl, setPriceEl] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const [ad, openAds] = useState(false);
  const [types, openTypes] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const open = Boolean(anchor);
  const isVehicleOpen = Boolean(vehicleEl);
  const isPriceOpen = Boolean(priceEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleVehicleClose = () => {
    setVehicleEl(null);
  };

  const handleVehicleOpen = (e) => {
    setVehicleEl(e.currentTarget);
  };

  const handlePriceClose = () => {
    setPriceEl(null);
  };

  const handlePriceOpen = (e) => {
    setPriceEl(e.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const renderDeskMenu = (
    <Menu
      id="vehicles"
      anchorEl={vehicleEl}
      open={isVehicleOpen}
      onClose={handleVehicleClose}
      TransitionComponent={Fade}
      classes={{ paper: classes.menuVehicle, list: classes.menuList }}
    >
      <MenuItem
        classes={{ root: classes.menuItem }}
        id="All Vehicles"
        onClick={(e) => changeTitle(e.target.id)}
      >All Vehicles</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >New Vehicles</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Used Vehicles</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Toyota</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Chevrolet</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Jeep</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Track</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Trailer</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Van</MenuItem>
    </Menu>
  );
  const renderPriceMenu = (
    <Menu
      id="price"
      anchorEl={priceEl}
      open={isPriceOpen}
      onClose={handlePriceClose}
      TransitionComponent={Fade}
      classes={{ paper: classes.menuVehicle, list: classes.menuList }}
    >
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Bellow 100$</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Between a 100$ - 500$</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Between a 500$ - 1000$</MenuItem>
      <MenuItem
        classes={{ root: classes.menuItem }}
      >Above 1000$</MenuItem>
    </Menu>
  );
  const renderHamburger = (
    <Menu
      id="fade-menu"
      elevation={0}
      anchorEl={anchor}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
      classes={{ paper: classes.menuPaper, list: classes.menuListList }}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.menuListList}
        disablePadding
      >
        <ListItem>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close drawer"
            aria-haspopup="false"
            aria-controls="fade-menu"
            onClick={handleClose}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </ListItem>
        <ListItem
          button onClick={() => openTypes(!types)}
          className={classes.menuItemListList}
          // className={classes.menuItem}
        >
          <ListItemIcon color="inherit">
            <CarIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="HEHICLES" />
          {types ? <ExpandMore /> : <ExpandLess /> }
        </ListItem>
        <Collapse in={types} timeout="auto" unmountOnExit>
          <List component="div" className={classes.menuSubList}>
            <ListItem button className={classes.menuItemList}>
              <ListItemText primary="All Vehicles" />
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              <ListItemText primary="Used Vehicles" />
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Toyota
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Chevroler
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Jeep
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Track
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Trailer
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Van
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button onClick={() => openAds(!ad)}
          className={classes.menuItemListList}
          // className={classes.menuItem}
        >
          <ListItemIcon>
            <MoneyIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary="BY PRICE" />
          {ad ? <ExpandMore /> : <ExpandLess /> }
        </ListItem>
        <Collapse in={ad} timeout="auto" unmountOnExit>
          <List component="div" className={classes.menuSubList}>
            <ListItem button className={classes.menuItemList}>
              Bellow 100$
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Between a 100$ - 500$
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Between a 500$ - 1000$
            </ListItem>
            <ListItem button className={classes.menuItemList}>
              Above 1000$
            </ListItem>
          </List>
        </Collapse>
        <ListItem button className={classes.menuItemListList}>
          <ListItemIcon>
            <StoreIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="MY ADS" />
        </ListItem>
        <ListItem button className={classes.menuItemListList}>
          <ListItemIcon>
            <ShoppingCartIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="POST A CAR" />
        </ListItem>
      </List>
    </Menu>

  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-haspopup="true"
            aria-controls="fade-menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" className="logo logo-nav" />
          <div className={classes.deskMenu}>
            <Button
              aria-haspopup="true"
              className={classes.dropDown}
              onClick={handleVehicleOpen}
              // onMouseOver
            >
              VEHICLES
              <ArrowDropDownIcon />
            </Button>
            <Button
              aria-haspopup="true"
              className={classes.dropDown}
              onClick={handlePriceOpen}
            >
              BY PRICE
              <ArrowDropDownIcon />
            </Button>
            <Button
              className={classes.dropDown}
            >
              YOUR ADS
            </Button>
            <Button
              className={classes.dropDown}
            >
              POST A VEHICLES
            </Button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderHamburger}
      {renderDeskMenu}
      {renderPriceMenu}
    </div>
  );
};

export default AppNav;
