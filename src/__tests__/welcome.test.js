import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('Should Render App Component', () => {
  it('should render 1 welcome div', () => {
    const wrapper = shallow(<App />);
    const div = wrapper.find('div').length;
    expect(div).toBe(1);
  });
});

