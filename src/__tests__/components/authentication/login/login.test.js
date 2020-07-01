import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../../../components/authentication/login/Login';

describe('<Login />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Login />);
  });
  it('should render the login form', () => {
    expect(wrapper.length).toBe(1);
  });
});
