import React from 'react';
import theme from '../../../assets/styles/index';

test('landing page styles', () => {
  expect(theme).toHaveProperty('palette');
  expect(theme).toHaveProperty('breakpoints');
  expect(theme).toHaveProperty('typography');
});
