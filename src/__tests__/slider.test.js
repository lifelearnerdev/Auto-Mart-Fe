import React from 'react';
import { mount } from 'enzyme';
import Slider from '../components/Shared/Slider';

describe('Should Render <Slider />', () => {
  const imgs = ['img1', 'img2', 'img3'];
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = mount(<Slider imgs={imgs} />);
    jest.runOnlyPendingTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    wrapper.unmount();
  });
  it('should render images', () => {
    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 5000);

    const div = wrapper.find('div').length;
    const img = wrapper.find('img').length;
    expect(div).toBe(1);
    expect(img).toBe(1);
  });
});

describe('Should Render <Slider /> with one immage', () => {
  const imgs = ['img1'];
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = mount(<Slider imgs={imgs} />);
    jest.runOnlyPendingTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    wrapper.unmount();
  });
  it('should render one image', () => {
    expect(wrapper.length).toBe(1);
  });
});
