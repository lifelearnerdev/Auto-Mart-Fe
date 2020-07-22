import React, { useState } from 'react';
import {
  Paper, Grid, Button, Typography, TextField,
  Container, Link
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from '../../assets/images/automart_logo.png';
import '../../assets/styles/home.scss';
import Styles from '../../assets/styles/landingPage';
import Slider from './Slider';
import sony from '../../assets/images/sony.jpg';
import pickup from '../../assets/images/pickup.jpg';
import toyota from '../../assets/images/toyota-hiace.jpg';
import ford from '../../assets/images/ford.jpg';
import mg from '../../assets/images/mg.jpg';
import hino from '../../assets/images/hino.jpg';
import truck from '../../assets/images/truck.jpeg';
import sale from '../../assets/images/sale.jpg';

/**
 * Landing page, paints the landing page
 * @param {Object} classes jss style classes
 * @returns {Node} jsx painting the landinng page
 */
const LandingPage = ({ classes }) => {
  const [emailAddress, setEmail] = useState('');

  const createAccount = () => {
    if (emailAddress) {
      localStorage.setItem('user_email', emailAddress);
      window.location.assign('/signup');
    }
  };

  return (
    <>
      <Paper className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid
            container
            justify="space-between"
            alignItems="flex-end"
            className={classes.nav}
          >
            <img src={logo} alt="logo" className="logo" />
            <Button
              className={classes.signinBtn}
              id="login"
              variant="contained"
              href="/login"
            >
            Sign In
            </Button>
          </Grid>
          <Paper className={classes.title}>
            <Container className={classes.textWrapper}>
              <Typography className={classes.typography}>
                Sell or Buy a car from trusted dealerships or private sellers
              </Typography>
              <TextField
                type="email"
                id="emaill"
                value={emailAddress}
                InputProps={{ classes: { input: classes.resizeTextField } }}
                InputLabelProps={{ classes: { root: classes.resizeTextField } }}
                className={classes.email}
                variant="filled"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="contained"
                id="create"
                onClick={() => createAccount()} className={classes.createBtn}
              >
                CREATE ACCOUNT
              </Button>
              <Typography className={classes.typoSmall}>
                Ready ? Enter your email to create an account and start doing business
              </Typography>
            </Container>
          </Paper>
        </Paper>
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          className={classes.typeWrap}
        >
          <Grid
            item xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={classes.typeTextWrap}
          >
            <Typography className={classes.typeTitle}>
            All vehicle types
            </Typography>
            <Typography className={classes.typeBody}>
            You will find Cars, Truks, Traillers, Vans, Buses, Motocycles, Byclicles, ...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Container className={classes.imgContainer}>
              <Slider imgs={[sony, pickup]} />
            </Container>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          justify="space-around"
          alignItems="center"
          className={classes.typeWrap}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Container className={classes.imgContainer}>
              <Slider imgs={[toyota, ford, mg]} />
            </Container>
          </Grid>
          <Grid
            item xs={12}
            sm={12} md={6}
            lg={6} xl={6}
            className={classes.typeTextWrap}
          >
            <Typography className={classes.typeTitle}>
          All brands
            </Typography>
            <Typography className={classes.typeBody}>
          Toyota, Mercedes, Chevrolet, Lexus, Mazda, Suzuki, Ford, Fiat, Dodge,
           Infinity, Lamburgini, Porche, and more
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          className={classes.typeWrap}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.typeTextWrap}>
            <Typography className={classes.typeTitle}>
              Used and new vehicles
            </Typography>
            <Typography className={classes.typeBody}>
              You will find new cars, old used cars, luxiry cars,
              for hire, cut-priced cars, promotions, and all price ranges
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Container className={classes.imgContainer}>
              <Slider imgs={[sale, truck, hino]} />
            </Container>
          </Grid>
        </Grid>
        <Grid container justify="flex-start" className={classes.footer}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Link href="#" className={classes.fooHead}>
            Question? Contact us
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.fooL}>
            <Link href="#" className={classes.links}>
          FAQ
            </Link>
            <Link href="#" className={classes.links}>
          Help center
            </Link>
            <Link href="#" className={classes.links}>
          Terms of use
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={classes.fooR}
          >
            <Link href="#" className={classes.links}>
          Account
            </Link>
            <Link href="#" className={classes.links}>
          How to sell
            </Link>
            <Link href="#" className={classes.links}>
          Privacy
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired
};
LandingPage.defaultProps = {
  classes: {}
};

export default withStyles(Styles)(LandingPage);
