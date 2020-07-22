import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../../../components/authentication/signup/Signup';

describe('<Signup />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Signup />);
  });
  it('should render the signup form', () => {
    expect(wrapper.length).toBe(1);
  });
});
