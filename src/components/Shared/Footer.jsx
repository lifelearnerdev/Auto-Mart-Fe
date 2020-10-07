import React from 'react';
import { Grid, Link, AppBar } from '@material-ui/core';
import useStyles from '../../assets/styles/footer';

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.footerDiv}>
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
      </AppBar>
    </>
  );
};

export default Footer;
