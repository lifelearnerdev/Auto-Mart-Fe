import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import slider from '../../assets/styles/slider';
import '../../assets/styles/home.scss';

const ImgAutoSlide = ({ imgs }) => {
  const [slide, changeSlide] = useState(0);
  const [checked, check] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === imgs.length - 1) {
        changeSlide(0);
      } else {
        changeSlide(slide + 1);
        check(!checked);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
      check(!checked);
    };
  });

  return (
    <>
      <div style={{ display: 'block', height: '100%', width: '100%' }}>
        <img style={slider.root} src={imgs[slide]} alt="image" />
      </div>
    </>
  );
};

ImgAutoSlide.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.any).isRequired
};

ImgAutoSlide.defaultProps = {
  imgs: []
};

export default ImgAutoSlide;
