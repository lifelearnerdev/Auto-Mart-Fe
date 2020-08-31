import React from 'react';
import Proptypes from 'prop-types';
import { Typography, Grid, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from '../../assets/styles/infoSection';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Title = ({ title, backArrow }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={3} sm={4} md={5} className={classes.gridLeft}>
            {backArrow ?
              (
                <IconButton>
                  <ArrowBackIcon onClick={() => history.goBack()} color="primary" fontSize="large" />
                </IconButton>
              ) : ' '}
          </Grid>
          <Grid item xs={9} sm={8} md={7}>
            <Typography variant="h3" className={classes.typography}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Title.propTypes = {
  title: Proptypes.string.isRequired,
  backArrow: Proptypes.string
};

Title.defaultProps = {
  title: ''
};

export default Title;
