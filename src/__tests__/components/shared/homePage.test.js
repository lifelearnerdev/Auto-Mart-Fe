import React from 'react';
import { mount } from 'enzyme';
import LandingPage from '../../../components/Shared/LandingPage';

describe('Should render <LandingPage />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<LandingPage />);
  });
  it('Should render the UI', () => {
    expect(wrapper.length).toBe(1);
  });
});
