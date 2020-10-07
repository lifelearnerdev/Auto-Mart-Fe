import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card';
import carAction from './carAction';
import LoadingIcon from '../../shared/CircularLoading';
import AppNav from '../../shared/Nav';
import Title from '../../shared/InfoSection';
import Footer from '../../shared/Footer';
import useStyles from '../../../assets/styles/cars/cars';

const Car = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const car = useSelector(state => state.car.car || []);
  const isLoading = useSelector(state => state.car.isLoading);
  const { id } = match.params;

  useEffect(() => {
    dispatch(carAction(id));
  }, []);

  return (
    <>
      <div>
        <AppNav />
        <Title title={`${car.manufacturer} ${car.model}`} backArrow />
        <Grid container justify="center" className={classes.carContainer}>
          {
            isLoading ? <LoadingIcon /> : (
              <Card
                image={car.photo}
                cardTitle={`${car.manufacturer} ${car.model}`}
                cardState={car.state}
                cardType={car.type}
                cardMake={car.manufacturer}
                cardModel={car.model}
                cardCost={`$ ${car.price} / day`}
                size={8}
                singleS={12}
                view
              />
            )
          }
        </Grid>
        <Footer />
      </div>
    </>
  );
};

Car.propTypes = {
  match: PropTypes.object
};

export default Car;
