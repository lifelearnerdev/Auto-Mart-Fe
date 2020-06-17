import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

describe('Should render <App />', () => {
  let wrapper;
  wrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
  it('Should render Router', () => {
    expect(wrapper.length).toBe(1);
  });
});
