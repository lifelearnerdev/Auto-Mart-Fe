import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AppNav from '../../shared/Nav';
import Footer from '../../shared/Footer';
import Title from '../../shared/InfoSection';
import useStyles from '../../../assets/styles/cars/cars';
import CarCard from '../Card';
import carsAction from './carsAction';
import LoadingIcon from '../../shared/CircularLoading';

const Cars = () => {
  const history = useHistory();
  const classes = useStyles();
  const cars = useSelector(state => state.cars?.cars || []);
  const loading = useSelector(state => state.cars.isLoading);
  const [title, setTitle] = useState('All vehicles');
  const dispatch = useDispatch();
  const carz = cars.slice(1);

  useEffect(() => {
    dispatch(carsAction());
  }, []);

  const handleClick = (id) => {
    history.push(`/cars/${id}`);
  };

  return (
    <>
      <div>
        <AppNav changeTitle={setTitle} />
        <Title title={title} />
        <Grid container justify="space-between" className={classes.container}>
          {loading ? <LoadingIcon /> : (
            carz.map(car => (
              <CarCard
                image={car.photo}
                cardTitle={`${car.manufacturer} ${car.model}`}
                cardState={car.state}
                cardType={car.type}
                cardMake={car.manufacturer}
                cardModel={car.model}
                cardCost={`$ ${car.price} / day`}
                carId={car.id}
                size={6}
                handleClick={() => handleClick(car.id)}
                singleS={6}
              />
            ))
          )}
        </Grid>
        <Footer />
      </div>
    </>
  );
};


export default Cars;
