import React from 'react';
import {
  Grid, Typography, Link, Button
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import useStyles from '../../assets/styles/cars/cars';

const CarCard = ({
  image, cardTitle, cardState, cardType, cardMake,
  cardModel, cardCost, carId, size, view, handleClick, singleS
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="flex-start"
        xs={12} sm={12} md={12} lg={12} xl={size}
        className={classes.card}
        onClick={handleClick}
        style={{ cursor: !view && 'pointer' }}
      >
        <Grid container item className={classes.insideCard}>
          <Grid container>
            <Grid item xs={12} sm={12} md={singleS} lg={singleS} xl={6}>
              <img className={classes.img} alt="car" src={image} />
            </Grid>
            <Grid item container
              xs={12} sm={12} md={singleS} lg={singleS} xl={6}
              justify="space-around"
              className={classes.details}
              direction="column">
              <Grid item container justify="space-between">
                <Typography className={classes.title} variant="subtitle1" gutterBottom>
                  {cardTitle}
                </Typography>
                <Link to="#" style={{ display: !view && 'none' }} className={classes.price}>
                  {"Flag as fraudulent"}
                </Link>
              </Grid>
              <Typography className={classes.typography} gutterBottom variant="body2">
                {`State : ${cardState}`}
              </Typography>
              <Typography className={classes.typography} gutterBottom variant="body2">
                {`BodyType : ${cardType}`}
              </Typography>
              <Typography className={classes.typography} gutterBottom variant="body2" >
                {`Make : ${cardMake}`}
              </Typography>
              <Typography className={classes.typography} gutterBottom variant="body2">
                {`Model : ${cardModel}`}
              </Typography>
              <Grid item container justify="space-between">
                <Typography variant="subtitle1" gutterBottom>
                  {`Rental Cost : ${view ? cardCost : ''}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.price}
                  style={{ display: view && 'none' }}
                  gutterBottom>
                  {cardCost}
                </Typography>
                <Button style={{ display: !view && 'none' }} className={classes.rentBtn}>
                  <ShoppingCartIcon fontSize="small" style={{ marginRight: '4px' }} />
                  {" Rent this Car"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

CarCard.propTypes = {
  image: PropTypes.object.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardState: PropTypes.string.isRequired,
  cardModel: PropTypes.string.isRequired,
  cardMake: PropTypes.string.isRequired,
  cardCost: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  carId: PropTypes.string.isRequired,
  size: PropTypes.number,
  view: PropTypes.bool,
  handleClick: PropTypes.func,
  singleS: PropTypes.number
};

CarCard.defaultProps = {
  image: {},
  cardTitle: '',
  cardState: '',
  cardModel: '',
  cardMake: '',
  cardCost: '',
  cardtype: '',
  carId: ''
};


export default CarCard;
