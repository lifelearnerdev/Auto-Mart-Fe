import React from 'react';
// import { createMuiTheme } from '@material-ui/core';
import theme from '../../../assets/styles/index';

test('landing page styles', () => {
  expect(theme).toHaveProperty('palette');
});
